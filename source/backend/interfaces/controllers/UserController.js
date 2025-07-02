const bcrypt = require('bcrypt');

class UserController {
    constructor(registerUseCase, loginUseCase, getUserUseCase) {
        this.registerUseCase = registerUseCase;
        this.loginUseCase = loginUseCase;
        this.getUserUseCase = getUserUseCase;
    }
    
    async register(req, res) {
        const { name, password, confirmPassword } = req.body;

        if (!name || !password || !confirmPassword) {
            return res.status(400).json({ error: 'Name, password and confirm password are required' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const existingUser = await this.getUserUseCase.execute(name);
            if (existingUser) {
                return res.status(400).json({ error: 'User already exists' });
            }
            else {
                const user = await this.registerUseCase.execute(name, hashedPassword);
                if (!user) {
                    return res.status(500).json({ error: 'Failed to register user' });
                }
                return res.json(user);
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async login(req, res) {
        const { name, password } = req.body;

        if (!name || !password) {
            return res.status(400).json({ error: 'Name and password are required' });
        }

        try {
            const user = await this.loginUseCase.execute(name, password);
            if (!user) {
                return res.status(401).json({ error: 'Invalid name or password' });
            }
            return res.json(user);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });          
        }
    }
}

module.exports = UserController;