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
