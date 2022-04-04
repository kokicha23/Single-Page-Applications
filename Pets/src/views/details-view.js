import { deleteById, getById, getDonationFromUser, getTotalDonation, postDonation } from "../api/pets.js";
import { detailsViewTemplate } from "../templates/details-view-template.js"
import { getUserData } from "../utils/sessionStorage.js";

let currentCtx;

let petId;


export async function renderDetailsView(ctx) {
    currentCtx = ctx;

    let userData = (getUserData() || {});
    let userId = userData.id;

    petId = ctx.params.id;

    let donated = await getDonationFromUser(petId, userId);
    let count = await getTotalDonation(petId);

    let donation = count * 100;

    let data = await getById(petId);

    ctx.render(detailsViewTemplate(data, userId, deleteHandler, donation, donated, onClick))
}

async function deleteHandler() {
    let check = confirm('Are you sure that you want to delete that postCard');
    if (check) {
        await deleteById(petId);
        currentCtx.page.redirect('/dashboard');
    }
}
async function onClick() {
    await postDonation(petId);
    currentCtx.page.redirect(`/details/${petId}`);
}