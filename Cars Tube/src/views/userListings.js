import { getUserCars } from "../api/cars.js";
import { userListingTemplate } from "../templates/userListingTemplate.js";
import { getUserData } from "../utils/sessionStorage.js";

let userId
export async function renderUserListings (ctx) {
   let user = (getUserData() || {});
   userId = user.id;
   let data = await getUserCars(userId)
  ctx.render(userListingTemplate(data))
}

