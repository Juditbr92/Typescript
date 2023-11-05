"use strict";
// RETO 7
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("./library");
var Book_1 = require("./Book");
var libro1 = new Book_1.Books("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
var libro2 = new Book_1.Books("La sombra del viento", 723, "s38326-37545", "Carlos Ruiz Zafon", "Planeta");
var libro3 = new Book_1.Books("Patria", 412, "23543254-123", "Fernando Aramburu", "Planeta");
var libreria1 = new library_1.Library([libro1, libro2, libro3], "Calle Mercurio", "Judit");
console.log(libreria1.toString());
console.log(libreria1.getNumberOfBooks());
console.log(libreria1.findByAuthor("Carlos Ruiz Zafon"));
console.log(libreria1.findByAuthor("Fernando Aramburu"));
