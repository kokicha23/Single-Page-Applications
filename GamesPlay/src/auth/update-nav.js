import { getUserData } from "../utils/sessionStorage.js";

export function updateNav() {
    let user = getUserData();
   
    if (user) {
        document.getElementById("user").style.display ="inline";
        document.getElementById("guest").style.display ="none";
        
       
    } else {
        document.getElementById("user").style.display ="none";
        document.getElementById("guest").style.display ="inline";
    }
}