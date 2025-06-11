const BookRepository = require('../../domain/repositories/BookRepository');
const Book = require('../../domain/entities/Book');
const BookModelMySQL = require('./BookModelMySQL');

class BookRepoMySQLImpl extends BookRepository {
    async getAllBooks() {
        const records = await BookModelMySQL.findAll();
        return records.map(r => new Book(r.dataValues));
    }

    async getBookById(id) {
        const record = await BookModelMySQL.findByPk(id);
        return record ? new Book(record.dataValues) : null;
    }
}
module.exports = BookRepoMySQLImpl;