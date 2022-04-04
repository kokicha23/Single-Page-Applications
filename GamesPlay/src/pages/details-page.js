import { del } from "../api/api.js";
import { deleteById, getById } from "../api/games.js";
import { detailsPageTemplate } from "../templates/details-page-template.js";
import { getUserData } from "../utils/sessionStorage.js";

let gameId;
let currentCtx;

export async function renderDetailsPage(ctx) {
    currentCtx = ctx;
    let userData = (getUserData() || {});
    let userId = userData.id;
    gameId = ctx.params.id;
    let gameDetails = await getById(gameId);
    ctx.render(detailsPageTemplate(gameDetails, userId, deleteHandler));
}


async function deleteHandler() {
    let check = confirm("Are you sure that you want to delete this game?")
    if (check) {
        await deleteById(gameId);
        currentCtx.page.redirect('/');
    }

}