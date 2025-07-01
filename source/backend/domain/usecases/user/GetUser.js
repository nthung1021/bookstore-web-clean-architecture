class GetUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(name) {
        return this.userRepository.getUserByName(name);
    }
}

module.exports = GetUser;