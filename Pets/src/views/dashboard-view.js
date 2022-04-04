import { getAllPets } from "../api/pets.js";
import { dashboardTemplate } from "../templates/dashboard-template.js";

export async function renderDashboardView(ctx){
    let data = await getAllPets();
    ctx.render(dashboardTemplate(data)) 
}