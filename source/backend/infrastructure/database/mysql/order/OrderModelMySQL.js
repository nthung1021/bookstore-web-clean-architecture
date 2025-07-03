const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const OrderModelMySQL = sequelize.define('Order', {
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: DataTypes.INTEGER,
    order_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    total_cost: DataTypes.FLOAT
});

module.exports = OrderModelMySQL;