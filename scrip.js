const dialog = document.querySelector("#add-book-dialog");
const dialogCancelBtn = document.querySelector(".dialog-cancel-btn");
const dialogSubmitBtn = document.querySelector(".dialog-submit-btn");
const dialogOpenBtn = document.querySelector(".add-book-btn");

const myLibrary = [];
// i want to make a book constoctor with title author
//and nubmer of pages and read status
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

let book1 = new Book("Naruto", "Kishimoto", 1640, true);
let book2 = new Book("sasuke", "Kishimoto hakoro", 1640, true);

console.log(book1.info);
// then with this constructor i want to add my own input to it and then
// add it to the library

myLibrary.push(book1);
myLibrary.push(book2);

// then i want to display all the books that are in the library

function displayBooks(books) {
  books.forEach((book) => {
    const main = document.querySelector("#main-section");
    const bookDiv = document.createElement("div");
    const title = document.createElement("p");
    const detailsDiv = document.createElement("div");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const deleteBtn = document.createElement("button");

    title.classList.toggle("title");
    bookDiv.classList.toggle("book");
    detailsDiv.classList.toggle("book-details");
    author.classList.toggle("author");
    pages.classList.toggle("pages");
    read.classList.toggle("read-status");
    deleteBtn.classList.toggle("delete-btn");

    let values = Object.values(book);
    title.textContent = values[0];
    author.textContent = `AUTHOR : ${values[1]}`;
    pages.textContent = `PAGES : ${values[2]}`;
    read.textContent = `Read Status : ${values[3] == true ? "Yes" : "No"}`;
    deleteBtn.textContent = "Remove";

    detailsDiv.append(author, pages, read);
    bookDiv.append(title, detailsDiv, deleteBtn);
    main.appendChild(bookDiv);
  });
}

displayBooks(myLibrary);
dialogCancelBtn.addEventListener("click", () => dialog.close());
dialogOpenBtn.addEventListener("click", () => dialog.showModal());
dialogSubmitBtn.addEventListener("click", (event) => getInput(event));

function getInput(event) {
  event.preventDefault();
  console.log(2);
}
