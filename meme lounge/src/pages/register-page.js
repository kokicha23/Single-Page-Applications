import { registerTemplate } from "../templates/register-template.js";
import { updateNav } from "../auth/update-nav.js";
import { register } from "../auth/users.js";
let currentCtx;

export function renderRegisterPage(ctx) {
    currentCtx = ctx;
    ctx.render(registerTemplate(onSubmit));
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; }
    if (formData.password != formData.repeatPass) { alert('Passwords must match!'); return; }

    e.target.reset();
    await register(formData.username, formData.email, formData.password, formData.gender);
    updateNav();
    currentCtx.page.redirect('/all-memes');
}
