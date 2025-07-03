const CartRepository = require('../../../../domain/repositories/CartRepository');
const Cart = require('../../../../domain/entities/Cart');
const CartModelMySQL = require('./CartModelMySQL'); 
const ProductModelMySQL = require('../product/ProductModelMySQL');

class CartRepoMySQLImpl extends CartRepository {
    async addToCart(userId, productId) {
        const cartItem = new Cart({ user_id: userId, product_id: productId });
        const record = await CartModelMySQL.create(cartItem);
        return new Cart(record.dataValues);
    }

    async getCartItems(userId) {
        const items = await CartModelMySQL.findAll({ where: { user_id: userId } });
        if (items.length === 0) {
            return [];
        }

        const itemDetails = [];
        for (const item of items) {
            const product = await ProductModelMySQL.findByPk(item.product_id);
            if (product) {
                itemDetails.push({
                    id: item.id,
                    name: product.name,
                    price: product.price,
                    quantity: item.quantity,
                });
            }
        }

        return itemDetails;
    }
}

module.exports = CartRepoMySQLImpl;