const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const BookModelMySQL = sequelize.define('Book', {
    id: { type: DataTypes.UUID, primaryKey: true },
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    publishedDate: DataTypes.DATE,
    price: DataTypes.FLOAT,
    imageUrl: DataTypes.STRING,
});
module.exports = BookModelMySQL;