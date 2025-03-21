function createBook(title, author) {
    return {
      title,
      author,
      printInfo: function() {
        console.log("Book: " + this.title + ", Author: " + this.author);
      }
    };
  }
  
  
  let book = createBook("1984", "George Orwell");
  book.printInfo();
  // Output: Book: 1984, Author: George Orwell
  