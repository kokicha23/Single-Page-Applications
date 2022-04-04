import { updateNav } from "./auth/update-nav.js";
import { render, page } from "./lib.js"
import { renderCreateView } from "./pages/create-view.js";
import { renderDetailsView } from "./pages/details-view.js";
import { renderEditView } from "./pages/edit-view.js";
import { renderHomeView } from "./pages/home-view.js";
import { renderLoginView } from "./pages/login-view.js";
import { onLogout } from "./pages/logout.js";
import { renderMyProfileView } from "./pages/myProfile-view.js";
import { renderRegisterView } from "./pages/register-view.js";

let root = document.getElementById('content');


updateNav();
page(renderer)
page('/', renderHomeView);
page('/login', renderLoginView)
page('/register', renderRegisterView)
page('/logout', onLogout)
page('/create', renderCreateView)
page('/details/:id', renderDetailsView)
page('/edit/:id', renderEditView)
page('/profile', renderMyProfileView)
page.start();



function renderer(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}
