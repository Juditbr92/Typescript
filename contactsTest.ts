
import { Contacts } from "./contacts"
import { Person } from "./person"

let person3 = new Person("Angel", 56, "Calle Lluvia");
let person4 = new Person("Carmen", 62, "Calle Madrid");
let person5 = new Person("Julia", 23, "Calle Almeria");

let agenda = new Contacts();

agenda.addPeople(person3);
agenda.addPeople(person4);

agenda.printCalendar();
