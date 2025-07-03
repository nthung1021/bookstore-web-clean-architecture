class PlaceOrderFromCart {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute(userId) { 
        return this.orderRepository.placeOrderFromCart(userId);
    }
}

module.exports = PlaceOrderFromCart;