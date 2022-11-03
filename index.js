const submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click", (event)=>getForm(event));

const libraryContent = document.querySelector(".library")


let myLibrary = [];
let newBook;

//Book constructor
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function getForm(event){
    event.preventDefault();
    const form = document.querySelector("form")
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");
    const errMsg = document.querySelector(".err-msg")
    if (title.value !== "" && author.value !== "" && pages.value !== ""){
        errMsg.style.display="none";
        if(read.checked){
            addBookToLibrary(title.value, author.value, pages.value, true)
        }else{
            addBookToLibrary(title.value, author.value, pages.value, false)
        }
        form.reset();  
        
    }else{
        errMsg.style.display="block"
    }
}

function addBookToLibrary(title, author, pages, read){
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
    renderBook()
}

function renderBook(){
    libraryContent.innerHTML=myLibrary.map((x)=>{
        let{title, author, pages, read}=x;
        let readClass;
        let readStatus;
        if (read){
            readClass = "already";
            readStatus = "Already read";
        }else {
            readClass = "not";
            readStatus = "Not read yet";
        }

        return`
            <div class="book">
                <h2>Title:</h2>
                <p class="title">${title}</p>
                <h2>Author: </h2>
                <p class="author">${author}</p>
                <h2>pages: </h2>
                <p class="pages">${pages}</p>
                <button class="read ${readClass}">${readStatus}</button>
                <button class="remove">Remove</button>
            </div> 
            `
    }).join("");
}


function changeReadStatus(title){

}