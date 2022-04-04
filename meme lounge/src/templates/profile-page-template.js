import { html } from "../lib.js";
import { userMemeCardTemplate } from "./user-meme-card-template.js";

export const profilePageTemplate = (userData, memes) => html`
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
            <div class="user-content">
                <p>Username: ${userData.username}</p>
                <p>Email: ${userData.email}</p>
                <p>My memes count: ${memes.length}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">
            ${memes.length
                ? memes.map(x => html`${userMemeCardTemplate(x)}`)
                : html`<p class="no-memes">No memes in database.</p>`
            }
        </div>
    </section>
`;