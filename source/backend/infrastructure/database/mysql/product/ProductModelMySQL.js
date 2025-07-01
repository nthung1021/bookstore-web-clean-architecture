const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const ProductModelMySQL = sequelize.define('Product', {
    id: { type: DataTypes.INT, primaryKey: true },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stock: DataTypes.INT,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
});
module.exports = ProductModelMySQL;