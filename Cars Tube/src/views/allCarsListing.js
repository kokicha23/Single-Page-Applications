import { getAllCars } from "../api/cars.js";
import { allCarsViewTemplate } from "../templates/allCarsViewTemplate.js";

export async function renderAllCarsListing (ctx){
const cars = await getAllCars();
ctx.render(allCarsViewTemplate(cars))
} 