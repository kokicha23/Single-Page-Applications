import { getUserData } from "../utils/sessionStorage.js";

export function updateNav() {
    let user = getUserData();

    if (user) {
        
        document.querySelectorAll('.user').forEach(x => x.style.display = 'inline');
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'none');
    } else {
        document.querySelectorAll('.user').forEach(x => x.style.display = 'none');
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'inline');
    }

}