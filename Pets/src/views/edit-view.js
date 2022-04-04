import { editById, getById } from "../api/pets.js";
import { editViewTemplate } from "../templates/edit-view-template.js";

let currentCtx;

let petId;

export async function renderEditView(ctx){
     
    currentCtx = ctx;

     petId = ctx.params.id;

    let data = await getById(petId);
    
    ctx.render(editViewTemplate( data, onSubmit))
}

async function onSubmit(e){
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; };

    await editById(petId, formData.name, formData.breed, formData.age, formData.weight, formData.image);
  
    currentCtx.page.redirect(`/details/${petId}`);
}