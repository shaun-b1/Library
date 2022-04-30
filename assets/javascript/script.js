const myLibrary = [{
    title: "The Eye of the World",
    author: "Robert Jordan",
    pages: "782",
    read: true
}, {
    title: "The Great Hunt",
    author: "Robert Jordan",
    pages: "706",
    read: true
}, {
    title: "Dune",
    author: "Frank Herbert",
    pages: "412",
    read: false
}];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

Book.prototype.addBookToLibrary = function() {
    myLibrary.push(this)
};


const bookshelf = document.querySelector(".bookshelf")

for (const book of myLibrary) {
    const item = document.createElement("li")
    item.classList.add('book')

    const title = document.createElement("h2")
    title.textContent = `${book.title}`

    const author = document.createElement("h2")
    author.textContent = `${book.author}`

    const pages = document.createElement("p")
    pages.textContent = `${book.pages} pages`

    const read = document.createElement("p")
    read.textContent = book.read == true ? "I've read this" : "I haven't read this yet"

    item.append(title, author, pages, read)
    bookshelf.appendChild(item)
}