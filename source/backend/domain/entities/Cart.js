class Cart {
    constructor({ user_id, product_id, quantity }) {
        this.user_id = user_id;
        this.product_id = product_id;
        this.quantity = quantity;
    }
}

module.exports = Cart;