import { createPostCard } from "../api/pets.js";
import { createViewTemplate } from "../templates/create-view-template.js";

let currentCtx;
export function renderCreateView(ctx) {
    currentCtx = ctx;
    ctx.render(createViewTemplate(onSubmit))
}


async function onSubmit(e){
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; };

    await createPostCard(formData.name, formData.breed, formData.age, formData.weight, formData.image)

    e.target.reset();
    currentCtx.page.redirect('/dashboard')
}  
