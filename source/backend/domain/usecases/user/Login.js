const bcrypt = require('bcrypt');

class Login {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(name, password) {
        const user = await this.userRepository.getUserByName(name);
        if (!user) return null;
        const isMatch = await bcrypt.compare(password, user.password);
        return isMatch ? user : null;      
    }
}

module.exports = Login;