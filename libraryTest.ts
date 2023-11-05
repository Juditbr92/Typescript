// RETO 7

import { Library } from "./library";
import { Books } from "./Book"


let libro1 = new Books("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
let libro2 = new Books("La sombra del viento", 723, "s38326-37545", "Carlos Ruiz Zafon", "Planeta");
let libro3 = new Books("Patria", 412, "23543254-123", "Fernando Aramburu", "Planeta");

let libreria1 = new Library([libro1, libro2, libro3], "Calle Mercurio", "Judit");

console.log(libreria1.toString());

console.log(libreria1.getNumberOfBooks());

console.log(libreria1.findByAuthor("Carlos Ruiz Zafon"));
console.log(libreria1.findByAuthor("Fernando Aramburu"));