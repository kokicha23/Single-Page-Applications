import { getMyEvents } from "../api/theaters.js";
import { myProfileViewTemplate } from "../templates/my-profile-view.js";
import { getUserData } from "../utils/sessionStorage.js";


export async function renderMyProfileView (ctx){
    
 let sessionStorageData = (getUserData() || {});
 let id = sessionStorageData.id;
 let myEvents = await getMyEvents(id);
 ctx.render(myProfileViewTemplate(sessionStorageData, myEvents))
}