import { updateNav } from "./auth/update-nav.js";
import { page, render } from "./lib.js"
import { renderAllCarsListing } from "./views/allCarsListing.js";
import { renderCreateView } from "./views/createCar.js";
import { renderDetails } from "./views/details.js";
import { renderEdit } from "./views/editCar.js";
import { renderHomeView } from "./views/homeView.js";
import { renderLoginPageView } from "./views/loginView.js";
import { onLogout } from "./views/logout.js";
import { renderRegisterView } from "./views/registerView.js";
import { renderUserListings } from "./views/userListings.js";

let root = document.getElementById('site-content');
updateNav()

page(renderer);
page('/', renderHomeView)
page('/login', renderLoginPageView)
page('/register', renderRegisterView)
page ('/allListings', renderAllCarsListing)
page ('/create', renderCreateView)
page ('/details/:id', renderDetails)
page ('/edit/:id', renderEdit)
page ('/myListings', renderUserListings)
page('/logout', onLogout)
page.start()


function renderer(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}

