import { html } from "../lib.js";

export const userMemeCardTemplate = (memeData) => html`
    <div class="user-meme">
        <p class="user-meme-title">${memeData.title}</p>
        <img class="userProfileImage" alt="meme-img" src="../..${memeData.imageUrl}">
        <a class="button" href="/details/${memeData._id}">Details</a>
    </div>
`;
