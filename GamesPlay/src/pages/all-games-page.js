import { getAllCatalogGames } from "../api/games.js";
import { allGamesPageTemplate } from "../templates/all-games-page-template.js";

export async function renderAllGames (ctx){
    let allGames = await getAllCatalogGames();
    ctx.render(allGamesPageTemplate(allGames))
}