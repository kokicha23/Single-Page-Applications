import { html } from "../lib.js";


export const myProfileViewTemplate = (user, event) =>html`
<section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${user.email}</h2>
            </div>
            <div class="board">
                ${ event.length 
                
                ? event.map(x => html`<div class="eventBoard">
                    <div class="event-info">
                        <img src=${x.imageUrl}>
                        <h2>${x.title}</h2>
                        <h6>${x.date}</h6>
                        <a href="/details   /${x._id}" class="details-button">Details</a>
                    </div>
                </div>`)
                : html`<div class="no-events">
                    <p>This user has no events yet!</p>
                </div>`
                }     
            </div>
        </section>


               
`