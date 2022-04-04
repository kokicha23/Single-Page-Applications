import { welcomePageTemplate } from "../templates/welcome-template.js";


export function renderWelcomePage(ctx) {
    ctx.render(welcomePageTemplate());
}
