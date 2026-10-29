// q3-library-system.js: Library Management System

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`[Error] Book "${this.title}" is already issued.`);
            return false;
        }
        this.isIssued = true;
        console.log(`[Success] Book "${this.title}" has been successfully issued.`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`[Error] Book "${this.title}" was not checked out.`);
            return false;
        }
        this.isIssued = false;
        console.log(`[Success] Book "${this.title}" has been returned to the library.`);
        return true;
    }
}

// Create an array of book objects
const libraryBooks = [
    new Book("Clean Code", "Robert C. Martin", "978-0132350884", false),
    new Book("You Don't Know JS", "Kyle Simpson", "978-1491904244", true),
    new Book("Eloquent JavaScript", "Marijn Haverbeke", "978-1593279509", false),
    new Book("Design Patterns", "Erich Gamma", "978-0201633610", false)
];

// Function to display all available books (not issued)
function displayAvailableBooks(books) {
    console.log("=== Available Books in Library ===");
    const available = books.filter(b => !b.isIssued);
    if (available.length === 0) {
        console.log("No books currently available.");
    } else {
        available.forEach(b => console.log(`- "${b.title}" by ${b.author} [ISBN: ${b.ISBN}]`));
    }
}

displayAvailableBooks(libraryBooks);

// Allow a user to issue a book by searching ISBN
function issueBookByISBN(books, targetISBN) {
    console.log(`\nAttempting to issue book with ISBN: ${targetISBN}...`);
    const book = books.find(b => b.ISBN === targetISBN);
    if (!book) {
        console.log("[Error] Book with specified ISBN not found.");
        return;
    }
    book.issueBook();
}

// Test issuing a book
issueBookByISBN(libraryBooks, "978-0132350884");

// Show available books after transaction
displayAvailableBooks(libraryBooks);