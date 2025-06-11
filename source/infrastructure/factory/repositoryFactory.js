function createBookRepository(dbType) {
    switch (dbType) {
        case 'mysql':
            return new (require('../database/mysql/BookRepoMySQLImpl'))();
        default:
            throw new Error(`Unsupported DB type: ${dbType}`);
    }
}

module.exports = {
    createBookRepository,
};
