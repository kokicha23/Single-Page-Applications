import { updateNav } from "../auth/update-nav.js";
import { logout } from "../auth/users.js";


export async function onLogout(ctx) {
    await logout()
    updateNav()
   ctx.page.redirect('/allListings')
}
