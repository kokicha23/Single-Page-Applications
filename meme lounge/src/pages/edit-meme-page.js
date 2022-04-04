import { getOneMeme, editMeme } from "../api/memes.js";
import { editMemeTemplate } from "../templates/edit-meme-template.js";
import { spinnerTemplate } from "../templates/spinner-template.js";

export async function renderEditMemePage(ctx) {
    const memeId = ctx.params.id;
    ctx.render(spinnerTemplate());
    const memeData = await getOneMeme(memeId);
    ctx.render(editMemeTemplate(memeData, onSubmit.bind(null, ctx, memeId)));
}

async function onSubmit(ctx, memeId, e) {
    e.preventDefault();

    let formData = Object.fromEntries(new FormData(e.target));
    e.target.reset();

    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; }

    await editMeme(memeId, formData.title, formData.description, formData.imageUrl);
    ctx.page.redirect(`/details/${memeId}`);
}
