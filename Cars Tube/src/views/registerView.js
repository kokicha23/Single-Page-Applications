import { updateNav } from "../auth/update-nav.js";
import { register } from "../auth/users.js";
import { registerViewTemplate } from "../templates/registerViewTemplate.js";

let context;

export function renderRegisterView(ctx) {
    context = ctx;
    ctx.render(registerViewTemplate(onSubmit));
}

async function onSubmit(e) {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target));
    if (Object.values(formData).some(x => !x)) { alert('All fields must be filled!'); return; }
    if (formData.password !== formData.repeatPass) { alert('Passwords should be equal!'); return; }
    e.target.reset();
    
    await register(formData.username, formData.password);
    updateNav()
    context.page.redirect('/');

}