import { editById, getById } from "../api/theaters.js";
import { editViewTemplate } from "../templates/edit-view-template.js";

let currentCtx;
let theaterId;

export async function renderEditView(ctx) {
    currentCtx = ctx;
    theaterId = ctx.params.id;
    let theaters = await getById(theaterId)
     
    ctx.render(editViewTemplate(theaters, onSubmit));
}

async function onSubmit(e){
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; };
    
    await editById(theaterId, formData.title, Number(formData.date), formData.author, formData.description, formData.imageUrl);
    currentCtx.page.redirect(`/details/${theaterId}`);
}