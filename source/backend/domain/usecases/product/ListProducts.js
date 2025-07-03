class ListProducts {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute() {
        return this.productRepository.getAllProducts();
    }
}
module.exports = ListProducts;