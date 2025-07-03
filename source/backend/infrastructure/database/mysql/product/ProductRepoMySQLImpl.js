const ProductRepository = require('../../../../usecases/repositories/ProductRepository');
const Product = require('../../../../domain/Product');
const ProductModelMySQL = require('./ProductModelMySQL');

class ProductRepoMySQLImpl extends ProductRepository {
    async getAllProducts() {
        const records = await ProductModelMySQL.findAll();
        return records.map(r => new Product(r.dataValues));
    }

    async getProductById(id) {
        const record = await ProductModelMySQL.findByPk(id);
        return record ? new Product(record.dataValues) : null;
    }
}
module.exports = ProductRepoMySQLImpl;