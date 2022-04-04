import { editById, getById } from "../api/cars.js";
import { editTemplate } from "../templates/editViewTemplate.js";

let context;
let id;
export async function renderEdit(ctx) {
    context = ctx;
     id = context.params.id;
    let data = await getById(id);

    ctx.render(editTemplate(data, onSubmit));
}   

async function onSubmit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some(x => !x)){
        alert ('All fields must be filled!')
        return;
    }
    await editById(id,formData.brand, formData.model, formData.description, Number(formData.year), formData.imageUrl, Number(formData.price));
    context.page.redirect(`/details/${id}`)
}
