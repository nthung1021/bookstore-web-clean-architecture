class Book {
    constructor({ id, name, author, publishedDate, price, coverUrl }) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.publishedDate = publishedDate;
        this.price = price;
        this.coverUrl = coverUrl;
    }
}
module.exports = Book;