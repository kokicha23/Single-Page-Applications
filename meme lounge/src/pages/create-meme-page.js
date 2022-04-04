import { createMemeTemplate } from "../templates/create-meme-template.js";
import { createMeme } from "../api/memes.js";

export function renderCreateMemePage(ctx) {
    ctx.render(createMemeTemplate(onSubmit.bind(null, ctx)));
}

async function onSubmit(ctx, e) {
    e.preventDefault();

    
    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; }

    e.target.reset();
    await createMeme(formData.title, formData.description, formData.imageUrl);
    ctx.page.redirect('/all-memes');
}
