// Document wide query selectors
const bookshelf = document.querySelector("#bookshelf")
const newBookButton = document.querySelector("#new-book-button")
const bookEntryModal = document.querySelector("#modal")
const bookEntryForm = document.querySelector("#book-entry-form")
const closeEntryForm = document.querySelector("#close-entry-form")
const createBookButton = document.querySelector("#create-book-button")
const myLibrary = []

// Object constructor function
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read ? true : false
};

// Function to add book to myLibrary
function addToLibrary() {

    // Calling the object constructor
    const newBook = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        document.getElementById("true").checked
    )
    myLibrary.push(newBook)

    // Adding the object to the DOM
    const entry = document.createElement("li")
    entry.classList.add('book')

    const title = document.createElement("h2")
    title.textContent = `${newBook.title}`
    title.classList.add("title")

    const author = document.createElement("h3")
    author.textContent = `written by ${newBook.author}`
    author.classList.add("author")


    const pages = document.createElement("p")
    pages.textContent = `${newBook.pages} pages`
    pages.classList.add("pages")

    const readButton = newBook.createReadButton()

    const deleteButton = newBook.createDeleteButton()

    entry.append(title, author, pages, readButton, deleteButton)
    bookshelf.appendChild(entry)
}

// Prevent usual form functionality
function prevent() {
    bookEntryForm.addEventListener("submit", (e) => {
        e.preventDefault();
    })
}

// Create read button function that is called in addToLibrary()
Book.prototype.createReadButton = function() {
    const readButton = document.createElement("button")
    readButton.classList.add('read-button')
    readButton.textContent = this.read ? "I've read this" : "I haven't read this yet"
    readButton.addEventListener('click', () => {
        if (this.read === true) {
            readButton.textContent = "I haven't read this yet"
            this.read = false
        } else {
            readButton.textContent = "I've read this"
            this.read = true
        }
    })
    return readButton
}

// Create delete button function that is called in addToLibrary()
Book.prototype.createDeleteButton = function() {
    const deleteButton = document.createElement('button')
    deleteButton.classList.add("delete-button")
    deleteButton.textContent = "x"
    deleteButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(this), 1)
        deleteButton.parentElement.remove()
    })
    return deleteButton;
}

// Event Listeners
newBookButton.addEventListener('click', () => {
    bookEntryModal.style.display = "block"
});

closeEntryForm.addEventListener('click', () => {
    bookEntryModal.style.display = "none"
    bookEntryForm.reset()
});

createBookButton.addEventListener("click", () => {
    prevent()
    addToLibrary()
    bookEntryModal.style.display = "none"
    bookEntryForm.reset()
})