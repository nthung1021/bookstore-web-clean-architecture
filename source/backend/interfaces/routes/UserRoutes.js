const express = require('express');
const { createUserRepository } = require('../../infrastructure/factory/repositoryFactory');
const Register = require('../../domain/usecases/user/Register');
const Login = require('../../domain/usecases/user/Login');
const GetUser = require('../../domain/usecases/user/GetUser');
const UserController = require('../controllers/UserController');

const dbType = process.env.DB_TYPE;
const userRepository = createUserRepository(dbType);

const register = new Register(userRepository);
const login = new Login(userRepository);
const getUser = new GetUser(userRepository);

const userController = new UserController(register, login, getUser);

const router = express.Router();
router.get('/register', UserController.register(userController));
router.get('/login', UserController.login(userController));

module.exports = router;