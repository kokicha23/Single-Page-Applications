import { html } from "../lib.js";

export const detailsViewTemplate = (pet, userId, deleteHandler, donation, donated, onClick) =>html`<section id="detailsPage">
<div class="details"> 
    <div class="animalPic">
        <img src=${pet.image}>
    </div>
    <div>
        <div class="animalInfo">
            <h1>Name: ${pet.name}</h1>
            <h3>Breed: ${pet.breed}</h3>
            <h4>Age: ${pet.age}</h4>
            <h4>Weight: ${pet.weight}kg</h4>
            <h4 class="donation">Donation: ${donation}$</h4>
        </div>
    <div class="actionBtn">
        
        ${ pet._ownerId == userId 
           ? html`
           
            <a href="/edit/${pet._id}" class="edit">Edit</a>
            <a @click = ${deleteHandler} class="remove">Delete</a>
            
        `
           : null
         }  
         ${userId && pet._ownerId !== userId && !donated
            ? html`<a @click = ${onClick} class="donate">Donate</a>`
            : null
        }
         
    </div>
</div>
</div>
</section>
`