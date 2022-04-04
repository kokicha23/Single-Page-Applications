import { getAllTheaters } from "../api/theaters.js";
import { homeViewTemplate } from "../templates/home-view-template.js";


export async function renderHomeView(ctx) {
    let theaters = await getAllTheaters();
    ctx.render(homeViewTemplate(theaters))
}