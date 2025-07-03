const OrderRepository = require('../../../../usecases/repositories/OrderRepository');
const Order = require('../../../../domain/Order');
const OrderProduct = require('../../../../domain/OrderProduct');
const OrderModelMySQL = require('./OrderModelMySQL');
const OrderProductModelMySQL = require('./OrderProductModelMySQL');
const CartModelMySQL = require('../cart/CartModelMySQL');
const ProductModelMySQL = require('../product/ProductModelMySQL');

class OrderRepoMySQLImpl extends OrderRepository {
    async placeOrderFromCart(userId) {
        const cartItems = await CartModelMySQL.findAll({ where: { user_id: userId } });
        if (cartItems.length === 0) {
            throw new Error('Cart is empty');
        }

        const order = new Order({ user_id: userId, total_cost: 0 });
        const orderRecord = await OrderModelMySQL.create(order);
        if (!orderRecord) {
            throw new Error('Failed to create order');
        }

        let totalAmount = 0;
        for (const item of cartItems) {
            const product = await ProductModelMySQL.findByPk(item.product_id);
            if (!product) {
                throw new Error(`Product with ID ${item.product_id} not found`);
            }         

            const orderProduct = new OrderProduct({
                order_id: orderRecord.id,
                product_id: item.product_id,
                quantity: item.quantity,
                total_price: product.price * item.quantity
            });
            const orderProductRecord = await OrderProductModelMySQL.create(orderProduct);
            if (!orderProductRecord) {
                throw new Error('Failed to create order product');
            }

            product.stock -= item.quantity;

            await product.save();

            totalAmount += orderProduct.total_price;
        }

        const updatedOrder = await orderRecord.update({ total_cost: totalAmount });
        if (!updatedOrder) {
            throw new Error('Failed to update order total amount');
        }

        const clearCart = await CartModelMySQL.destroy({ where: { user_id: userId } });
        if (clearCart === 0) {
            throw new Error('Failed to clear cart');
        }

        return new Order(updatedOrder.dataValues);
    }

    async placeOrderFromProduct(userId, productId, quantity) {
        const product = await ProductModelMySQL.findByPk(productId);
        if (!product) {
            throw new Error('Product not found');
        }

        if (product.stock < quantity) {
            throw new Error(`Insufficient stock for product ${product.name} - requested ${quantity}, available ${product.stock}`);
        }

        const order = new Order({ 
            user_id: userId, 
            total_cost: product.price * quantity 
        });
        const orderRecord = await OrderModelMySQL.create(order);
        if (!orderRecord) {
            throw new Error('Failed to create order');
        }
        
        const orderProduct = new OrderProduct({
            order_id: orderRecord.id,
            product_id: productId,
            quantity: quantity,
            total_price: product.price * quantity
        });
        const orderProductRecord = await OrderProductModelMySQL.create(orderProduct);
        if (!orderProductRecord) {
            throw new Error('Failed to create order product');
        }

        product.stock -= quantity;

        await product.save();

        return new Order(orderRecord.dataValues);
    }

    async getOrder(userId) {
        const orders = await OrderModelMySQL.findAll({ where: { user_id: userId } });
        if (orders.length === 0) {
            return [];
        }

        const orderDetails = [];
        for (const order of orders) {
            const orderProducts = await OrderProductModelMySQL.findAll({ where: { order_id: order.id } });
            const products = await Promise.all(
                orderProducts.map(async (op) => {
                    const product = await ProductModelMySQL.findByPk(op.product_id);
                    return {
                        product_id: op.product_id,
                        product_name: product.name,
                        price: product.price,
                        quantity: op.quantity,
                        total_price: op.total_price
                    };
                })
            );
            orderDetails.push({
                order_id: order.id,
                total_cost: order.total_cost,
                order_date: order.createdAt,
                products
            });
        }

        return orderDetails;
    }
}

module.exports = OrderRepoMySQLImpl;