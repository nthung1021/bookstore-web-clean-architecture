class ListProducts {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute() {
        return await this.productRepository.getAllProducts();
    }
}
module.exports = ListProducts;