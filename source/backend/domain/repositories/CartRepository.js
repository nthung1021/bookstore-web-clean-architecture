class CartRepository {
    addToCart(userId, productId, quantity) { throw new Error('Method addToCart must be implemented.'); }
    getCartItems(userId) { throw new Error('Method getCartItems must be implemented.'); }
}

module.exports = CartRepository;