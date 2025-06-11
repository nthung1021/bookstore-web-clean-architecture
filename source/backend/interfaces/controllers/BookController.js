class BookController {
    constructor(listBooksUseCase) {
        this.listBooksUseCase = listBooksUseCase;
    }

    async getAllBooks(req, res) {
        try {
            const books = await this.listBooksUseCase.execute();
            res.json(books);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}
module.exports = BookController;