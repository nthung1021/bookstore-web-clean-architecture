function createProductRepository(dbType) {
    switch (dbType) {
        case 'mysql':
            return new (require('../database/mysql/product/ProductRepoMySQLImpl'))();
        default:
            throw new Error(`Unsupported DB type: ${dbType}`);
    }
}

function createUserRepository(dbType) {
    switch (dbType) {
        case 'mysql':
            return new (require('../database/mysql/user/UserRepoMySQLImpl'))();
        default:
            throw new Error(`Unsupported DB type: ${dbType}`);
    }
}

function createCartRepository(dbType) {
    switch (dbType) {
        case 'mysql':
            return new (require('../database/mysql/cart/CartRepoMySQLImpl'))();
        default:
            throw new Error(`Unsupported DB type: ${dbType}`);
    }
}

function createOrderRepository(dbType) {
    switch (dbType) {
        case 'mysql':
            return new (require('../database/mysql/order/OrderRepoMySQLImpl'))();
        default:
            throw new Error(`Unsupported DB type: ${dbType}`);
    }
}

module.exports = {
    createProductRepository,
    createUserRepository,
    createCartRepository,
    createOrderRepository
};
