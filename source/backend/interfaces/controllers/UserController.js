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
            res.status(400).json({ error: 'Name, password and confirm password are required' });
        }

        if (password !== confirmPassword) {
            res.status(400).json({ error: 'Passwords do not match' });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const existingUser = await this.getUserUseCase.execute(name);
            if (existingUser) {
                res.status(400).json({ error: 'User already exists' });
            }
            else {
                const user = await this.registerUseCase.execute(name, hashedPassword);
                if (!user) {
                    res.status(500).json({ error: 'Failed to register user' });
                }
                res.json(user);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async login(req, res) {
        const { name, password } = req.body;

        if (!name || !password) {
            res.status(400).json({ error: 'Name and password are required' });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await this.loginUseCase.execute(name, hashedPassword);
            if (!user) {
                res.status(401).json({ error: 'Invalid name or password' });
            }
            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });          
        }
    }
}

module.exports = UserController;