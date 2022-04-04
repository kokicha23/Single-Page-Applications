import { updateNav } from "../auth/update-nav.js";
import { register } from "../auth/users.js";
import { registerViewTemplate } from "../templates/register-view-template.js";

let currentCtx;

export function renderRegisterView(ctx) {
    currentCtx = ctx;
    ctx.render(registerViewTemplate(onSubmit))
}

async function onSubmit(e) {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; }
    if (formData.password !== formData.repeatPassword) { alert('Passwords should be equal!'); return; }
    await register(formData.email, formData.password);
    
    updateNav();
    e.target.reset();
    currentCtx.page.redirect('/')
    
}

