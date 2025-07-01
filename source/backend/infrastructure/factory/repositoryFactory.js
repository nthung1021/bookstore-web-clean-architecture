function createProductRepository(dbType) {
    switch (dbType) {
        case 'mysql':
            return new (require('../database/mysql/ProductRepoMySQLImpl'))();
        default:
            throw new Error(`Unsupported DB type: ${dbType}`);
    }
}

module.exports = {
    createProductRepository,
};
