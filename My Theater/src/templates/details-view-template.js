import { html } from "../lib.js";

export const detailsViewTemplate = (theater, userId, deleteHandler) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${theater.title}</h1>
            <div>
                <img src=${theater.imageUrl} />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${theater.description}</p>
            <h4>Date: ${theater.date}</h4>
            <h4>Author: ${theater.author}</h4>
            ${theater._ownerId == userId
            ? html` <div class="buttons">
                <a class="btn-delete" @click=${deleteHandler}>Delete</a>
                <a class="btn-edit" href="/edit/${theater._id}">Edit</a>
                <a class="btn-like" href="#">Like</a>
            </div>`
            : html`<p class="likes">Likes: 0</p>`
        }

        </div>
    </div>
</section>
`
