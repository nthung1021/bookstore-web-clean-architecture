class AddToCart {
    constructor(cartRepository) {
        this.cartRepository = cartRepository;
    }

    async execute(userId, productId) {
        return this.cartRepository.addToCart(userId, productId);
    }
}

module.exports = AddToCart;