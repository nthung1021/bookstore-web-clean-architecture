const express = require('express');
const { createBookRepository } = require('../../infrastructure/factory/repositoryFactory');
const ListBooks = require('../../domain/usecases/ListBooks');
const GetBookDetail = require('../../domain/usecases/GetBookDetail');
const BookController = require('../controllers/BookController');

const dbType = process.env.DB_TYPE;
const bookRepository = createBookRepository(dbType);

const listBooks = new ListBooks(bookRepository);
const getBookDetail = new GetBookDetail(bookRepository);
const bookController = new BookController(listBooks);

const router = express.Router();
router.get('/', bookController.getAllBooks.bind(bookController));
router.get('/:id', bookController.getBookDetail.bind(bookController));

module.exports = router;
