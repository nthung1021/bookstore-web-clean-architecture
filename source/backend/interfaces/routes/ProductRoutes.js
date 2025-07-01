const express = require('express');
const { createProductRepository } = require('../../infrastructure/factory/repositoryFactory');
const ListProducts = require('../../domain/usecases/product/ListProducts');
const GetProductDetail = require('../../domain/usecases/product/GetProductDetail');
const ProductController = require('../controllers/ProductController');

const dbType = process.env.DB_TYPE;
const productRepository = createProductRepository(dbType);

const listProducts = new ListProducts(productRepository);
const getProductDetail = new GetProductDetail(productRepository);

const productController = new ProductController(listProducts, getProductDetail);

const router = express.Router();
router.get('/', productController.getAllProducts.bind(productController));
router.get('/:id', productController.getProductDetail.bind(productController));

module.exports = router;