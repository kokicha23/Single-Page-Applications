import { deleteById, getById } from "../api/theaters.js";
import { detailsViewTemplate } from "../templates/details-view-template.js";
import { getUserData } from "../utils/sessionStorage.js";

let currentCtx;
let theaterId;

export async function renderDetailsView(ctx) {
    let data = (getUserData() || {});
    let userId = data.id;
    currentCtx = ctx;
    theaterId = ctx.params.id;
    let theaters = await getById(theaterId);
    ctx.render(detailsViewTemplate(theaters, userId, deleteHandler))
}

    
async function deleteHandler() {
    let check = confirm('Are you sure that you want to delete this event?');
    if (check) {
        await deleteById(theaterId);
        currentCtx.page.redirect('/');
    }
}


