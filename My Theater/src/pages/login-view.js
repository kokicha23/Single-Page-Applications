import { updateNav } from "../auth/update-nav.js";
import { login } from "../auth/users.js";
import { loginViewTemplate } from "../templates/login-view-template.js";

let currentCtx;
export function renderLoginView(ctx) {
    currentCtx = ctx;
    ctx.render(loginViewTemplate(onSubmit));
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