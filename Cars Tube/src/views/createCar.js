import { createCar } from "../api/cars.js";
import { createCarTemplate } from "../templates/createCarViewTemplate.js";

let currentContext;
export function renderCreateView(ctx) {
    currentContext = ctx;
    ctx.render(createCarTemplate(onSubmit))
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; }
    e.target.reset();
    await createCar(formData.brand, formData.model, formData.description, Number(formData.year), formData.imageUrl, Number(formData.price))
    currentContext.page.redirect('/allListings');
}