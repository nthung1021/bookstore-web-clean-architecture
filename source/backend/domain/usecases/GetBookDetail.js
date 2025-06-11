class GetBookDetail {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }

    async execute(bookId) {
        return this.bookRepository.getBookById(bookId);
    }
}

module.exports = GetBookDetail;
