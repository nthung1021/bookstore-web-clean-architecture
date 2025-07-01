class ProductController {
    constructor(listProductsUseCase) {
        this.listProductsUseCase = listProductsUseCase;
    }

    constructor(getProductDetailUseCase) {
        this.getProductDetailUseCase = getProductDetailUseCase;
    }

    async getAllProducts(req, res) {
        try {
            const products = await this.listProductsUseCase.execute();
            res.json(products);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    async getProductDetail(req, res) {
        const { id } = req.params;

        try {
            const product = await this.getProductDetailUseCase.execute(id);
            if (!product) return res.status(404).json({ message: 'Product not found' });
            res.json(product);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
module.exports = ProductController;