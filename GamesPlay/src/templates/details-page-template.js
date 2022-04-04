import { html } from "../lib.js";

export const detailsPageTemplate = (game, userId, deleteHandler) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">
           ${game.summary}
        </p>
        ${ game._ownerId == userId
           ? html`
        <div class="buttons">

            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click =${deleteHandler} class="button">Delete</a>

        </div>`
            : null 
        }
    </div>
</section>
`