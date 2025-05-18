// 2. Define models
const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const Parents = sequelize.define('parents', {
  fname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Parents