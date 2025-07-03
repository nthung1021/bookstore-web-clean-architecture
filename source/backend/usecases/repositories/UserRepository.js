class UserRepository {
    register(name, password) { throw new Error('Method register must be implemented'); }
    login(name, password) { throw new Error('Method login must be implemented'); }
    getUserByName(name) { throw new Error('Method getUserByName must be implemented'); }
}

module.exports = UserRepository;