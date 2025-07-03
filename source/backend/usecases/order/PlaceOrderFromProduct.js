class PlaceOrderFromProduct {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute(userId, productId, quantity) {
        return this.orderRepository.placeOrderFromProduct(userId, productId, quantity);
    }
}

module.exports = PlaceOrderFromProduct;