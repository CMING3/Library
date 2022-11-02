let myLibrary = [];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=Boolean(read)? "already read":"not read yet";
    this.info=function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

const theHobbit=new Book("The Hobbit", "J.R.R", 295, false)

console.log(theHobbit.info())

function addBookToLibrary(){

}