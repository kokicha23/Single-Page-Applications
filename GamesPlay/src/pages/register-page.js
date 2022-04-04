import { updateNav } from "../auth/update-nav.js";
import { register } from "../auth/users.js";
import { registerPageTemplate } from "../templates/register-page-template.js";


let currentCtx;

export function renderRegisterPage(ctx) {
    currentCtx = ctx;
    ctx.render(registerPageTemplate(onSubmit));
}


async function onSubmit (e){
    let confirmPass = document.getElementById('confirm-password').value;
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; };
    if (formData.password !== confirmPass) {alert('Passwords should be equal'); return; };
    await register(formData.email, formData.password);
    e.target.reset();
    updateNav();
    currentCtx.page.redirect('/');
}
