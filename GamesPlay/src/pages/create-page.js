import { createGame } from "../api/games.js";
import { updateNav } from "../auth/update-nav.js";
import { createPageTemplate } from "../templates/create-page-template.js";

let currentCtx ;
export async function renderCreatePage(ctx) {
    currentCtx =ctx;
    ctx.render(createPageTemplate(onSubmit))
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; };

    await createGame(formData.title, formData.category, formData.maxLevel, formData.imageUrl, formData.summary);
    updateNav();
    e.target.reset();
   currentCtx.page.redirect('/')
}