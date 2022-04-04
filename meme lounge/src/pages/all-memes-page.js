import { allMemesTemplate } from "../templates/all-memes-template.js";
import { spinnerTemplate } from "../templates/spinner-template.js";
import { getAllMemes } from "../api/memes.js";

export async function renderAllMemesPage(ctx) {
    ctx.render(spinnerTemplate());
    const memes = await getAllMemes();
    ctx.render(allMemesTemplate(memes));
}
