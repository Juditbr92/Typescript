// RETO 4

export class Books {
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(title:string, nPages: number, isbn: string, author: string, editorial: string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    public gettitle(): string {
        return this.title;
    }

    public settitle(title: string){
        this.title = title; 
    }

    public getnPages(): number{
        return this.nPages;
    }

    public setnPages(nPages: number){
        this.nPages = nPages;
    }

    public getisbn(): string{
        return this.isbn;
    }

    public setisbn(isbn: string){
        this.isbn = isbn;
    }

    public getauthor(): string{
        return this.author;
    }

    public setauthor(author: string){
        this.author = author
    }

    public geteditorial(): string{
        return this.editorial;
    }

    public seteditorial(editorial : string){
        this.editorial = editorial;
    }

    public toString(): string {
        return (
        `Title - ${this.title}
        Number of pages - ${this.nPages} 
        ISBN - ${this.isbn}
        Author - ${this.author}
        Editorial - ${this.editorial}`)
    }
}



