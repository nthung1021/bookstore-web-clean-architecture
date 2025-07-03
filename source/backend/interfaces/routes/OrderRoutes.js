const express = require('express');
const { createOrderRepository } = require('../../infrastructure/factory/repositoryFactory');
const PlaceOrderFromCart = require('../../usecases/order/PlaceOrderFromCart');
const PlaceOrderFromProduct = require('../../usecases/order/PlaceOrderFromProduct');
const GetOrder = require('../../usecases/order/GetOrder');
const OrderController = require('../controllers/OrderController');

const dbType = process.env.DB_TYPE;
const orderRepository = createOrderRepository(dbType);

const placeOrderFromCart = new PlaceOrderFromCart(orderRepository);
const placeOrderFromProduct = new PlaceOrderFromProduct(orderRepository);
const getOrder = new GetOrder(orderRepository);

const orderController = new OrderController(placeOrderFromCart, placeOrderFromProduct, getOrder);

const router = express.Router();
router.post('/from-cart', orderController.placeOrderFromCart.bind(orderController));
router.post('/from-product', orderController.placeOrderFromProduct.bind(orderController));
router.post('/', orderController.getOrder.bind(orderController));

module.exports = router;