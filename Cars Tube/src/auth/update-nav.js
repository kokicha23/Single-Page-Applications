import { getUserData } from "../utils/sessionStorage.js";

export function updateNav() {
    let user = getUserData();
   
    if (user) {
        
        document.querySelector('#profile a').textContent =`Welcome ${user.username}`;
        document.querySelectorAll('#profile').forEach(x => x.style.display = 'inline');
        document.querySelectorAll('#guest').forEach(x => x.style.display = 'none');

    } else {
        document.querySelectorAll('#profile').forEach(x => x.style.display = 'none');
        document.querySelectorAll('#guest').forEach(x => x.style.display = 'inline');
    }
}