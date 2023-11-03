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
        for (var _i = 0, _a = this.people; _i < _a.length; _i++) {
            var person = _a[_i];
            for (var key in person) {
                if (typeof (person[key]) !== "function") {
                    console.log("".concat(key, " ").concat(person[key]));
                }
            }
        }
    };
    return Contacts;
}());
exports.Contacts = Contacts;
