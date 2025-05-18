const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')

const Childss = sequelize.define('Childs', {
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  module.exports = Childss