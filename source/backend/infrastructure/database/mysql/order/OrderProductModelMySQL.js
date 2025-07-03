const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const OrderProductModelMySQL = sequelize.define('OrderProduct', {
    order_id: { type: DataTypes.INTEGER, primaryKey: true },
    product_id: { type: DataTypes.INTEGER, primaryKey: true },
    quantity: DataTypes.INTEGER,
    total_price: DataTypes.FLOAT
});

module.exports = OrderProductModelMySQL;