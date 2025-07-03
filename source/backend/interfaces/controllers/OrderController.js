class OrderController {
    constructor(placeOrderFromCartUseCase, placeOrderFromProductUseCase, getOrderUseCase) {
        this.placeOrderFromCartUseCase = placeOrderFromCartUseCase;
        this.placeOrderFromProductUseCase = placeOrderFromProductUseCase;
        this.getOrderUseCase = getOrderUseCase;
    }

    async placeOrderFromCart(req, res) {
        try {
            const { userId } = req.body;
            if (!userId) {
                return res.status(400).json({ error: 'User ID is required' });
            }

            const result = await this.placeOrderFromCartUseCase.execute(userId);
            if (result.error) {
                return res.status(400).json({ error: result.error });
            }
            return res.status(200).json({ message: 'Order placed successfully from cart', data: result });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Cannot place order from cart - Internal server error'});
        }
    }

    async placeOrderFromProduct(req, res) {
        try {
            const { userId, productId, quantity } = req.body;
            if (!userId || !productId || !quantity) {
                return res.status(400).json({ error: 'User ID, Product ID, and Quantity are required' });
            }

            const result = await this.placeOrderFromProductUseCase.execute(userId, productId, quantity);
            if (result.error) {
                return res.status(400).json({ error: result.error });
            }
            return res.status(200).json({ message: 'Order placed successfully from product', data: result });
        } catch (err) {
            console.error(err);
            if (err.message.includes('out of stock') || err.message.includes('Insufficient stock')) {
                return res.status(400).json({ error: err.message });
            }
            return res.status(500).json({ error: 'Cannot place order from this product - Internal server error'});
        }
    }

    async getOrder(req, res) {
        try {
            const { userId } = req.body;
            if (!userId) {
                return res.status(400).json({ error: 'User ID is required' });
            }

            const order = await this.getOrderUseCase.execute(userId);
            if (!order || order.length === 0) {
                return res.status(404).json({ message: 'No order found for this user' });
            }

            return res.status(200).json({ message: 'Order retrieved successfully', data: order });
        } catch (err) {
            console.error(err); 
            return res.status(500).json({ error: 'Cannot get list of orders - Internal server error'});
        }
    }
}

module.exports = OrderController;