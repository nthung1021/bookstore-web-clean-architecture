const express = require('express');
const { createBookRepository } = require('../../infrastructure/factory/repositoryFactory');
const ListBooks = require('../../domain/usecases/ListBooks');
const BookController = require('../controllers/BookController');

const dbType = process.env.DB_TYPE;
const bookRepository = createBookRepository(dbType);
const listBooks = new ListBooks(bookRepository);
const bookController = new BookController(listBooks);

const router = express.Router();
router.get('/', bookController.getAllBooks.bind(bookController));

module.exports = router;
