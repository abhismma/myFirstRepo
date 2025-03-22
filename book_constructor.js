// Book Constructor Function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Adding method to Book prototype
Book.prototype.getSummary = function () {
    return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Creating an array of book instances
const books = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
    new Book("To Kill a Mockingbird", "Harper Lee", 1960),
    new Book("1984", "George Orwell", 1949),
    new Book("The Catcher in the Rye", "J.D. Salinger", 1951)
];

// Export books array
export default books;
