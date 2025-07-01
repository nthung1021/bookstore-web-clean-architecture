const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const UserModelMySQL = sequelize.define('User', {
    id: { type: DataTypes.INT, primaryKey: true },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
});

module.exports = UserModelMySQL;