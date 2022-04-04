import { updateNav } from "../auth/update-nav.js";
import { login } from "../auth/users.js";
import { loginViewTemplate } from "../templates/loginViewTemplate.js";

let context;

export function renderLoginPageView(ctx) {
    context = ctx;
    ctx.render(loginViewTemplate(onSubmit));
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    e.target.reset();
 
    await login(formData.username, formData.password);
    updateNav()
    context.page.redirect('/allListings')

}