const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const ProductModelMySQL = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
});
module.exports = ProductModelMySQL;