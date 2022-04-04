import { loginPageTemplate } from "../templates/login-page-template.js";
import { updateNav } from "../auth/update-nav.js";
import { login } from "../auth/users.js";

let currentCtx;

export function renderLoginPage(ctx) {
    currentCtx = ctx;
    ctx.render(loginPageTemplate(onSubmit))
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; };
    await login(formData.email, formData.password);
    updateNav();
    e.target.reset();
    currentCtx.page.redirect('/');
}