// 1. Connect to DB

const Sequelize = require('sequelize')

const sequelize = new Sequelize('laptop', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});


module.exports = sequelize;