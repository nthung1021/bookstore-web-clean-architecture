const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const CartModelMySQL = sequelize.define('Cart', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true },
    product_id: { type: DataTypes.INTEGER, primaryKey: true },
    quantity: { type: DataTypes.INTEGER, defaultValue: 1 }
});

module.exports = CartModelMySQL;