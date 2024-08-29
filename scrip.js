const dialog = document.querySelector("#add-book-dialog");
const dialogCancelBtn = document.querySelector(".dialog-cancel-btn");
const dialogSubmitBtn = document.querySelector(".dialog-submit-btn");
const dialogOpenBtn = document.querySelector(".add-book-btn");

const myLibrary = [];

displayBooks(myLibrary);
dialogCancelBtn.addEventListener("click", () => dialog.close());
dialogOpenBtn.addEventListener("click", () => dialog.showModal());
dialogSubmitBtn.addEventListener("click", (event) => getInput(event));

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

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

    const values = Object.values(book);

    title.classList.toggle("title");
    bookDiv.classList.toggle("book");
    detailsDiv.classList.toggle("book-details");
    author.classList.toggle("author");
    pages.classList.toggle("pages");
    read.classList.toggle("read-status");
    deleteBtn.classList.toggle("delete-btn");

    title.textContent = values[0];
    author.textContent = `AUTHOR : ${values[1]}`;
    pages.textContent = `PAGES : ${values[2]}`;
    read.textContent = `Read Status : ${values[3] == true ? "Yes" : "No"}`;
    deleteBtn.textContent = "Remove";

    deleteBtn.addEventListener("click", () =>
      deleteBtn.closest(".book").remove()
    );
    detailsDiv.append(author, pages, read);
    bookDiv.append(title, detailsDiv, deleteBtn);
    main.appendChild(bookDiv);
  });
}

function getInput(event) {
  event.preventDefault();
  const titleEl = document.querySelector("#title");
  const authorEl = document.querySelector("#author");
  const pagesEl = document.querySelector("#pages");
  const heaveReadEl = document.querySelector("#have-read");
  console.log(titleEl.value);
  const title = titleEl.value;
  const author = authorEl.value;
  const pages = pagesEl.value;
  const heaveRead = heaveReadEl.checked == true ? true : false;

  const book = new Book(title, author, pages, heaveRead);

  dialog.close();
  myLibrary.push(book);
  displayBooks(myLibrary);
  myLibrary.length = 0;
}
