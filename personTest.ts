// Reto 2. Prueba la clase person

import { Person } from "./Typescript/person"

let person2 = new Person("Maria", 35, "Calle Merurio")

person2.printName();
console.log(person2.yearOfBirth(2023));
console.log(person2.getAddress());
console.log(person2.setAddress("Calle Lagos"));
console.log(person2.getAddress());

