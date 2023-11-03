//Reto 1. Crea una clase person

export class Person {
    public name: string;
    public age: number;
    private address: string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public printName(){
        console.log(this.name);
        
    }

    public yearOfBirth(currentYear: number): number {
        let yearOfBirth = currentYear - this.age;
        return yearOfBirth; 
    }

    public setAddress(newAddress: string){
        this.address = newAddress;
        return newAddress;
    }

    public getAddress():string {
        return this.address;
    }
}







