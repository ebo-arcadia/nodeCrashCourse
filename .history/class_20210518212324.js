class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    reading() {
        console.log(`The famous author ${this.author} recently published a new book called ${this.title}`)
    }
}

module.exports = Book;