"use strict";
// RETO 4
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
var Books = /** @class */ (function () {
    function Books(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Books.prototype.gettitle = function () {
        return this.title;
    };
    Books.prototype.settitle = function (title) {
        this.title = title;
    };
    Books.prototype.getnPages = function () {
        return this.nPages;
    };
    Books.prototype.setnPages = function (nPages) {
        this.nPages = nPages;
    };
    Books.prototype.getisbn = function () {
        return this.isbn;
    };
    Books.prototype.setisbn = function (isbn) {
        this.isbn = isbn;
    };
    Books.prototype.getauthor = function () {
        return this.author;
    };
    Books.prototype.setauthor = function (author) {
        this.author = author;
    };
    Books.prototype.geteditorial = function () {
        return this.editorial;
    };
    Books.prototype.seteditorial = function (editorial) {
        this.editorial = editorial;
    };
    Books.prototype.toString = function () {
        return ("Title - ".concat(this.title, "\n        Number of pages - ").concat(this.nPages, " \n        ISBN - ").concat(this.isbn, "\n        Author - ").concat(this.author, "\n        Editorial - ").concat(this.editorial));
    };
    return Books;
}());
exports.Books = Books;
