import { html } from "../lib.js";

export const allGamesPageTemplate = (games) => html`
<section id="catalog-page">
            <h1>All Games</h1>
        
            ${games.length 
              ?games.map(x => html`
              <div class="allGames">
              <div class="allGames-info">
                    <img src=${x.imageUrl}>
                    <h6>${x.category}</h6>
                    <h2>${x.title}</h2>
                    <a href="/details/${x._id}" class="details-button">Details</a>
                </div>
                </div>
              `)
              : html`<h3 class="no-articles">No articles yet</h3>`
            }
        

</section>
`