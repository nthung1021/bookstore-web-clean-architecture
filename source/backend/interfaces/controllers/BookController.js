class BookController {
    constructor(listBooksUseCase) {
        this.listBooksUseCase = listBooksUseCase;
    }

    constructor(getBookDetailUseCase) {
        this.getBookDetailUseCase = getBookDetailUseCase;
    }

    async getAllBooks(req, res) {
        try {
            const books = await this.listBooksUseCase.execute();
            res.json(books);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async getBookDetail(req, res) {
        const { id } = req.params;

        try {
            const book = await this.getBookDetailUseCase.execute(id);
            if (!book) return res.status(404).json({ message: 'Book not found' });
            res.json(book);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
module.exports = BookController;