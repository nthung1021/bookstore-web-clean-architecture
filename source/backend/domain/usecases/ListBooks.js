class ListBooks {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }

    async execute() {
        return await this.bookRepository.getAllBooks();
    }
}
module.exports = ListBooks;