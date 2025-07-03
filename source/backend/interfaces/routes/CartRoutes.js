const express = require('express');
const { createCartRepository } = require('../../infrastructure/factory/repositoryFactory');
const AddToCart = require('../../domain/usecases/cart/AddToCart');
const GetCartsItems = require('../../domain/usecases/cart/GetCartItems');
const CartController = require('../controllers/CartController');

const dbType = process.env.DB_TYPE;
const cartRepository = createCartRepository(dbType);

const addToCart = new AddToCart(cartRepository);
const getCartItems = new GetCartsItems(cartRepository);

const cartController = new CartController(addToCart, getCartItems);

const router = express.Router();
router.post('/add', cartController.addToCart.bind(cartController));
router.get('/:userId', cartController.getCartItems.bind(cartController));  

module.exports = router;