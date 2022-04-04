import { createEvent } from "../api/theaters.js";
import { createViewTemplate } from "../templates/create-event-view-template.js";

let currentCtx;
export function renderCreateView(ctx){
    currentCtx = ctx;
    ctx.render(createViewTemplate(onSubmit));
}

async function onSubmit (e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; };

    await createEvent(formData.title, formData.date, formData.author, formData.imageUrl, formData.description);

    currentCtx.page.redirect('/');
}