import { html } from "../lib.js";

export const userListingTemplate = (car) => html`<section id="my-listings">
<h1>My car listings</h1>
<div class="listings">
   ${car.length
      ? car.map(x => html`<div class="listing">
        <div class="preview">
            <img src=${x.imageUrl}>
        </div>
        <h2>${x.brand} ${x.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${x.year}</h3>
                <h3>Price: ${x.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/details/${car._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>`)
      : html`<p class="no-cars"> You haven't listed any cars yet.</p>`
      } 
</div>
</section>
`