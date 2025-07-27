const library = {
    books: [
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
    ],

    addBook(book) {
        const { title, author, year } = book;
        // Validate book information
        if (
            typeof title !== 'string' || title.trim() === '' ||
            typeof author !== 'string' || author.trim() === '' ||
            typeof year !== 'number' || isNaN(year)
        ) {
            console.log("Book information is incomplete or invalid.");
            return;
        }

        // Check for duplicate title
        if (this.findBookByTitle(title)) {
            console.log(`A book with the title "${title}" already exists.`);
            return;
        }

        // Add book
        this.books.push({ title: title.trim(), author: author.trim(), year });
        console.log(`Book "${title}" added successfully.`);
    },

    findBookByTitle(title) {
        return this.books.find(book => book.title === title);
    },

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            const removed = this.books.splice(index, 1)[0];
            console.log(`Book "${removed.title}" removed.`);
        } else {
            console.log(`Book "${title}" not found.`);
        }
    }
};


library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); // ✅ Valid
library.removeBook("The Hobbit"); // ✅ Remove existing

console.log(`Total books in library: ${library.books.length}`);
console.log("Current collection:", library.books);
