const express = require('express');
const { createUserRepository } = require('../../infrastructure/factory/repositoryFactory');
const Register = require('../../usecases/user/Register');
const Login = require('../../usecases/user/Login');
const GetUser = require('../../usecases/user/GetUser');
const UserController = require('../controllers/UserController');

const dbType = process.env.DB_TYPE;
const userRepository = createUserRepository(dbType);

const getUser = new GetUser(userRepository);
const register = new Register(userRepository);
const login = new Login(userRepository);

const userController = new UserController(register, login, getUser);

const router = express.Router();
router.post('/register', userController.register.bind(userController));
router.post('/login', userController.login.bind(userController));

module.exports = router;