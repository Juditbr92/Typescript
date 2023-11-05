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
        for(let person of this.people){ 
            for(let key in person ){
                if(typeof(person[key]) !== "function"){
                    console.log(`${key} - ${person[key]}`);
                }
            }
        }
    }
}


