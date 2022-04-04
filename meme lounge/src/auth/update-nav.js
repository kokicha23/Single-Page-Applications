import { getUserData } from "../utils/user-data.js";

export function updateNav() {
    let user = getUserData();

    if (user) {
        
        document.querySelectorAll('.user').forEach(x => x.style.display = 'block');
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'none');
        document.querySelector('.profile > span').textContent = `Welcome, ${user.email}`;
    } else {
        document.querySelectorAll('.user').forEach(x => x.style.display = 'none');
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'block');
    }
}