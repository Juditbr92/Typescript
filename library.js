"use strict";
// Reto 6
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.setBooks = function (newBook) {
        this.books.push(newBook);
    };
    Library.prototype.getBooks = function () {
        return this.books;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.toString = function () {
        var libraryInfo = "";
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            libraryInfo = libraryInfo + "Book ".concat(this.books.indexOf(book) + 1, ":\n");
            for (var key in book) {
                if (typeof (book[key]) !== "function") {
                    libraryInfo = libraryInfo + ("".concat(key, " - ").concat(book[key], "\n"));
                }
            }
        }
        return libraryInfo;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        return this.books.filter(function (books) { return books.getauthor() === author; });
    };
    return Library;
}());
exports.Library = Library;
