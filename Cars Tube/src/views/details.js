import { deleteById, getById } from "../api/cars.js";
import { detailsTemplate } from "../templates/detailsViewTemplate.js";
import { getUserData } from "../utils/sessionStorage.js";

let carId
let context;
export async function renderDetails(ctx) {
    context = ctx;
    let data = (getUserData() || {});
    let userId = data.id;
    carId = ctx.params.id;
    let car = await getById(carId);
    ctx.render(detailsTemplate(car, userId, onDelete))
}


async function onDelete() {
    let check = confirm('Are you sure that you want to delete this car?');
    if (check) {
        await deleteById(carId)
        context.page.redirect('/allListings')
    }
}

