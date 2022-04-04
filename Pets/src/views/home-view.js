import { homePageTemplate } from "../templates/home-view-template.js";

export function renderHomeView(ctx){
    ctx.render(homePageTemplate())
}