import { memeDetailsTemplate } from "../templates/meme-details-template.js";
import { spinnerTemplate } from "../templates/spinner-template.js";
import { getOneMeme, deleteMeme } from "../api/memes.js";
import { getUserData } from "../utils/user-data.js";

export async function renderMemeDetails(ctx) {
    const memeId = ctx.params.id;
    let userData = JSON.parse(getUserData()) || {};

    ctx.render(spinnerTemplate());
    const data = await getOneMeme(memeId);

    const memeContext = {
        memeData: data,
        onEdit: onEdit.bind(null, ctx, memeId),
        onDelete: onDelete.bind(null, ctx, memeId),
        memeId: memeId,
        userId: userData.id,
    };

    ctx.render(memeDetailsTemplate(memeContext));
}

function onEdit(ctx, id) {
    ctx.page.redirect(`/edit-meme/${id}`);
}

async function onDelete(ctx, id) {
    await deleteMeme(id);
    ctx.page.redirect('/all-memes');
}
