class Order {
    constructor({ id, user_id, order_time, total_cost }) {
        this.id = id;
        this.user_id = user_id;
        this.order_time = order_time;
        this.total_cost = total_cost;
    }
}

module.exports = Order;