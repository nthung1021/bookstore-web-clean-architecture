class GetCartsItems {
    constructor(cartRepository) {
        this.cartRepository = cartRepository;
    }

    async execute(userId) {
        return this.cartRepository.getCartItems(userId);
    }
}

module.exports = GetCartsItems;