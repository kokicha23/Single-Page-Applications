import { getAllHomePageGames } from "../api/games.js";
import { homePageTemplate } from "../templates/home-page-template.js";

export async function renderHomePage(ctx){
 const allGames = await getAllHomePageGames();
 ctx.render(homePageTemplate(allGames));
}

