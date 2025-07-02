const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const UserModelMySQL = sequelize.define('User', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
});

module.exports = UserModelMySQL;