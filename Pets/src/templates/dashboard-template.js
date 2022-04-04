import { html } from "../lib.js";

export const dashboardTemplate = (pets) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${pets.length 
           ? pets.map(x => html` <div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src=${x.image}>
            </article>
            <h2 class="name">${x.name}</h2>
            <h3 class="breed">${x.breed}</h3>
            <div class="action">
                <a class="btn" href="/details/${x._id}">Details</a>
            </div>
        </div>
           `)
           : html`<div>
            <p class="no-pets">No pets in dashboard</p>
        </div>`
        }  
    </div>
</section>
`