import { html } from "../lib.js";

export const allCarsViewTemplate = (carsData) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings"></div>
     ${carsData.length
    
      ? carsData.map(x => html`
      <div class="listing">
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
                            <a href="/details/${x._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
      `)
       : html`<p>No Cars in database.</p>`
       
    }

    </div>
</section>
`