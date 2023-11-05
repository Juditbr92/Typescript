// Reto 6

import { Books } from "./Book"

export class Library {
    private books: Books[]
    private address: string;
    private manager: string;

    constructor(books: Books[], address: string, manager: string){
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    public setBooks(newBook: Books){
        this.books.push(newBook);
    }

    public getBooks(): Books[]{
        return this.books;
    }

    public setAddress(address : string){
        this.address = address;
    }

    public getAddress(): string {
        return this.address;
    }

    public setManager(manager : string){
        this.manager = manager;
    }

    public getManager() : string{
        return this.manager
    }

    public toString(): string {
        let libraryInfo = "";
        for(let book of this.books){
            libraryInfo = libraryInfo + `Book ${this.books.indexOf(book) + 1}:\n`;
            for(let key in book){
                    if(typeof(book[key]) !== "function"){
                        libraryInfo = libraryInfo + (`${key} - ${book[key]}\n`);
                }   
                
            }
        } 
        return libraryInfo;
    }

    public getNumberOfBooks(): number {
        return this.books.length;
    }

    public findByAuthor(author:string): Books[]{
        return this.books.filter(books => books.getauthor() === author);
    }
        
} 












