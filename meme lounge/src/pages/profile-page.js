import { profilePageTemplate } from "../templates/profile-page-template.js"
import { getAllUserMemes } from "../api/memes.js";
import { getUserData } from "../utils/user-data.js";
import { spinnerTemplate } from "../templates/spinner-template.js";

export async function renderProfilePage(ctx) {
    const user = JSON.parse(getUserData());
    if (!user) return;

    ctx.render(spinnerTemplate());
    const userMemes = await getAllUserMemes(user.id);
    ctx.render(profilePageTemplate(user, userMemes));
}
