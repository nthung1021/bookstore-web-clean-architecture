const bcrypt = require('bcrypt');
const UserRepository = require('../../../../usecases/repositories/UserRepository');
const User = require('../../../../domain/User');
const UserModelMySQL = require('./UserModelMySQL');

class UserRepoMySQLImpl extends UserRepository {
    async register(name, password) {
        const record = await UserModelMySQL.create({ name, password });
        return record ? new User(record.dataValues) : null;
    }

    async login(name, password) {
        const record = await UserModelMySQL.findOne({ where: { name } });
        if (record && await bcrypt.compare(password, record.password)) {
            return new User(record.dataValues);
        }
        return null;
    }

    async getUserByName(name) {
        const record = await UserModelMySQL.findOne({ where: { name } });
        return record ? new User(record.dataValues) : null;
    }
}

module.exports = UserRepoMySQLImpl;