import { loginTemplate } from "../templates/login-template.js";
import { updateNav } from "../auth/update-nav.js";
import { login } from "../auth/users.js";

let currentCtx;

export function renderLoginPage(ctx) {
    currentCtx = ctx;
    ctx.render(loginTemplate(onSubmit));
};

async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    e.target.reset();
    
    await login(formData.email, formData.password);
    updateNav();
    currentCtx.page.redirect('/all-memes');
};
