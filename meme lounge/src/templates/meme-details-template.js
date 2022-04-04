import { html } from "../lib.js";

export const memeDetailsTemplate = (ctx) => html`
    <section id="meme-details">
        <h1>Meme Title: ${ctx.memeData.title}</h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src="../..${ctx.memeData.imageUrl}">
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>${ctx.memeData.description}</p>

                <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                ${ ctx.memeData._ownerId === ctx.userId
                    ? html`
                        <a class="button warning" @click=${ctx.onEdit}>Edit</a>
                        <button class="button danger" @click=${ctx.onDelete}>Delete</button>
                      `
                    : null
                }
                
            </div>
        </div>
    </section>
`;
