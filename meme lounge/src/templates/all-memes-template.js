import { html } from "../lib.js";
import { memeCardTemplate } from "./meme-card-template.js";

export const allMemesTemplate = (memes) => html`
    <section id="meme-feed">
        <h1>All Memes</h1>
        <div id="memes">
            ${ memes.length 
                ? memes.map(x => html`${memeCardTemplate(x)}`)
                : html`<p class="no-memes">No memes in database.</p>`
            }
        </div>
    </section>
`;
