class CartController {
    constructor (addToCartUseCase, getCartItemsUseCase) {
        this.addToCartUseCase = addToCartUseCase;
        this.getCartItemsUseCase = getCartItemsUseCase;
    }

    async addToCart(req, res) {
        try {
            const { userId, productId } = req.body;
            if (!userId || !productId) {
                return res.status(400).json({ error: 'User ID and Product ID are required' });
            }

            const result = await this.addToCartUseCase.execute(userId, productId);
            if (result.error) {
                return res.status(400).json({ error: result.error });
            }

            return res.status(200).json({ message: 'Product added to cart successfully', data: result });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Cannot add this product to cart - Internal server error'});
        }
    }

    async getCartItems(req, res) {
        try {
            const { userId } = req.params;
            if (!userId) {
                return res.status(400).json({ error: 'User ID is required' });
            }

            const cartItems = await this.getCartItemsUseCase.execute(userId);
            if (!cartItems || cartItems.length === 0) {
                return res.status(404).json({ message: 'No items found in the cart' });
            }

            return res.status(200).json({ message: 'Cart items retrieved successfully', data: cartItems });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Cannot get all the items in the cart - Internal server error'});
        }
    }
}

module.exports = CartController;