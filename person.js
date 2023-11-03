"use strict";
//Reto 1. Crea una clase person
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        var yearOfBirth = currentYear - this.age;
        return yearOfBirth;
    };
    Person.prototype.setAddress = function (newAddress) {
        this.address = newAddress;
        return newAddress;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    return Person;
}());
exports.Person = Person;
