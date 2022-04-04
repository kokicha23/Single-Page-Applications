import { updateNav } from "./auth/update-nav.js";
import { decorateCtx } from "./middleware/middleware.js";
import { renderHomeView } from "./views/home-view.js";
import { page } from "./lib.js"
import { renderLoginView } from "./views/login-view.js";
import { renderRegisterView } from "./views/register-view.js";
import { onLogout } from "./views/logout.js";
import { renderDashboardView } from "./views/dashboard-view.js";
import { renderCreateView } from "./views/create-view.js";
import { renderDetailsView } from "./views/details-view.js";
import { renderEditView } from "./views/edit-view.js";

updateNav();
page(decorateCtx);
page('/', renderHomeView)
page('/login', renderLoginView)
page('/register', renderRegisterView)
page('/dashboard', renderDashboardView)
page('/create', renderCreateView)
page('/logout', onLogout)
page('/details/:id', renderDetailsView)
page('/edit/:id', renderEditView)
page.start();