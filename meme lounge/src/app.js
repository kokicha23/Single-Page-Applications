import { updateNav } from "./auth/update-nav.js";
import { render, page } from "./lib.js";
import { renderAllMemesPage } from "./pages/all-memes-page.js";
import { renderLoginPage } from "./pages/login-page.js";
import { renderRegisterPage } from "./pages/register-page.js";
import { renderWelcomePage } from "./pages/welcome-page.js";
import { renderMemeDetails } from "./pages/meme-details-page.js";
import { renderCreateMemePage } from "./pages/create-meme-page.js";
import { logout } from "./auth/users.js";
import { renderEditMemePage } from "./pages/edit-meme-page.js";
import { renderProfilePage } from "./pages/profile-page.js";

const root = document.getElementById('root');
updateNav();

page(decorateContext);
page('/', renderWelcomePage);
page('/all-memes', renderAllMemesPage);
page('/details/:id', renderMemeDetails);
page('/create-meme', renderCreateMemePage);
page('/edit-meme/:id', renderEditMemePage);
page('/profile', renderProfilePage);
page('/login', renderLoginPage);
page('/register', renderRegisterPage);
page('/logout', onLogout);

page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}

async function onLogout(ctx) {
    await logout();
    updateNav();
    ctx.page.redirect('/');
}
