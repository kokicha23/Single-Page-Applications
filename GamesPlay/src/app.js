import { updateNav } from "./auth/update-nav.js";
import { page, render} from "./lib.js"
import { renderAllGames } from "./pages/all-games-page.js";
import { renderCreatePage } from "./pages/create-page.js";
import { renderDetailsPage } from "./pages/details-page.js";
import { renderEditPage } from "./pages/edit-page.js";
import { renderHomePage } from "./pages/home-page.js";
import { renderLoginPage } from "./pages/login-page.js";
import { onLogout } from "./pages/logout-page.js";
import { renderRegisterPage } from "./pages/register-page.js";


const root = document.getElementById("main-content")

updateNav();
page(decorateCtx);
page('/', renderHomePage);
page('/login', renderLoginPage)
page('/register', renderRegisterPage)
page('/create',renderCreatePage)
page('/logout', onLogout)
page('/details/:id', renderDetailsPage)
page('/edit/:id',renderEditPage)
page('/all-games', renderAllGames)
page.start();


export function decorateCtx(ctx, next) {
    ctx.render = (content) => render(content, root)
    next();
}