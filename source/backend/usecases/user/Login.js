class Login {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(name, password) {
        return this.userRepository.login(name, password); 
    }
}

module.exports = Login;