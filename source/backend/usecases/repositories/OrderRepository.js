class OrderRepository {
    placeOrderFromCart(userId) { throw new Error('Method placeOrderFromCart must be implemented.'); }
    placeOrderFromProduct(userId, productId, quantity) { throw new Error('Method placeOrderFromProduct must be implemented.'); }
    getOrder(userId) { throw new Error('Method getOrder must be implemented.'); }
}

module.exports = OrderRepository;