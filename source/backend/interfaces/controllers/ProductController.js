class ProductController {
    constructor(listProductsUseCase, getProductDetailUseCase) {
        this.listProductsUseCase = listProductsUseCase;
        this.getProductDetailUseCase = getProductDetailUseCase;
    }

    async getAllProducts(req, res) {
        try {
            const products = await this.listProductsUseCase.execute();
            return res.json(products);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getProductDetail(req, res) {
        const { id } = req.params;

        try {
            const product = await this.getProductDetailUseCase.execute(id);
            if (!product) return res.status(404).json({ message: 'Product not found' });
            return res.json(product);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = ProductController;