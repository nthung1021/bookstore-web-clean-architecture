const { Sequelize } = require('sequelize');

const db_name = process.env.DB_NAME;
const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_port = process.env.DB_PORT;
const db_dialect = process.env.DB_TYPE;

const sequelize = new Sequelize(db_name, db_user, db_pass, {
    host: db_host,
    dialect: db_dialect,
    port: db_port,
    logging: false,
});

module.exports = sequelize;
