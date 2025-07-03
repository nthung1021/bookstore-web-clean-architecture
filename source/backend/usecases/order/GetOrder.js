class GetOrder {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute(userId) {
        return this.orderRepository.getOrder(userId);
    }
}

module.exports = GetOrder;