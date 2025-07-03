class Register {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(name, password) {
        return this.userRepository.register(name, password);
    }
}

module.exports = Register;