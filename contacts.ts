// Reto 3

import { Person } from "./person"

export class Contacts {
    public people: Person[];

    constructor (){
        this.people = []
    }

    public addPeople(newPerson : Person){
        this.people.push(newPerson);
    }

    public printCalendar(){
        console.log(this.people);
    }
}


