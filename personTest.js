"use strict";
// Reto 2. Prueba la clase person
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var person2 = new person_1.Person("Maria", 35, "Calle Merurio");
person2.printName();
console.log(person2.yearOfBirth(2023));
console.log(person2.getAddress());
console.log(person2.setAddress("Calle Lagos"));
console.log(person2.getAddress());
