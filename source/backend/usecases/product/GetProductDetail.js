class GetProductDetail {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute(productId) {
        return this.productRepository.getProductById(productId);
    }
}

module.exports = GetProductDetail;
