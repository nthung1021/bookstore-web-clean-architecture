class OrderProduct {
    constructor({ order_id, product_id, quantity, total_price }) {
        this.order_id = order_id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.total_price = total_price;
    }
}

module.exports = OrderProduct;