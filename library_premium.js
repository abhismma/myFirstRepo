// Book Constructor Function
function Book(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true; // Default availability
}

// Member Constructor Function
function Member(name) {
    this.name = name;
    this.borrowedBooks = [];
}

// Borrow Book Method in Member prototype
Member.prototype.borrowBook = function(book) {
    if (this.borrowedBooks.length >= 3) {
        console.log(`${this.name} cannot borrow more than 3 books.`);
        return;
    }
    
    if (book.isAvailable) {
        book.isAvailable = false;
        this.borrowedBooks.push(book.title);
        console.log(`${this.name} borrowed "${book.title}".`);
    } else {
        console.log(`"${book.title}" is already borrowed.`);
    }
};

// PremiumMember Constructor (inherits from Member)
function PremiumMember(name) {
    Member.call(this, name); // Call Member constructor
    this.specialCollectionAccess = true; // Additional property for premium members
}

// Inherit Member prototype
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

// Overriding borrowBook method
PremiumMember.prototype.borrowBook = function(book) {
    if (this.borrowedBooks.length >= 5) {
        console.log(`${this.name} cannot borrow more than 5 books.`);
        return;
    }

    // Call the original borrowBook method using apply
    Member.prototype.borrowBook.apply(this, [book]);
};

// Export constructors for modularity
export { Book, Member, PremiumMember };

import { Book, Member, PremiumMember } from "./library.js";

// Creating Books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
const book3 = new Book("1984", "George Orwell");
const book4 = new Book("The Catcher in the Rye", "J.D. Salinger");
const book5 = new Book("Moby-Dick", "Herman Melville");
const book6 = new Book("The Hobbit", "J.R.R. Tolkien");

// Creating Members
const alice = new Member("Alice");
const bob = new PremiumMember("Bob");

// Regular Member Borrowing Books
alice.borrowBook(book1); // Alice borrowed "The Great Gatsby".
alice.borrowBook(book2); // Alice borrowed "To Kill a Mockingbird".
alice.borrowBook(book3); // Alice borrowed "1984".
alice.borrowBook(book4); // Alice cannot borrow more than 3 books.

// Premium Member Borrowing Books
bob.borrowBook(book4); // Bob borrowed "The Catcher in the Rye".
bob.borrowBook(book5); // Bob borrowed "Moby-Dick".
bob.borrowBook(book6); // Bob borrowed "The Hobbit".
bob.borrowBook(book1); // "The Great Gatsby" is already borrowed.
bob.borrowBook(book2); // Bob borrowed "To Kill a Mockingbird".
bob.borrowBook(book3); // Bob borrowed "1984".
bob.borrowBook(book4); // Bob cannot borrow more than 5 books.

// Using Bind to Create a Pre-Bound Borrow Function
const borrowForAlice = alice.borrowBook.bind(alice, book5);
borrowForAlice(); // Alice cannot borrow more than 3 books.
