"use strict";
// Reto 3
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.addPeople = function (newPerson) {
        this.people.push(newPerson);
    };
    Contacts.prototype.printCalendar = function () {
        console.log(this.people);
    };
    return Contacts;
}());
exports.Contacts = Contacts;
