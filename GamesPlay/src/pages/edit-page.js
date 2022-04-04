import { getById } from "../api/games.js";
import { editPageTemplate } from "../templates/edit-page-template.js";
import {editGameById} from "../api/games.js"

let currentCtx;
let gameId;

export async function renderEditPage(ctx){
    currentCtx = ctx; 
    gameId = ctx.params.id;
    let gameData = await getById(gameId);
    
    ctx.render(editPageTemplate(gameData,onSubmit))
}

async function onSubmit(e){
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; };
    await editGameById(gameId, formData.title, formData.category, formData.maxLevel, formData.imageUrl, formData.summary)
    currentCtx.page.redirect(`/details/${gameId}`);
}