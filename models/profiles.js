const sequelize = require('../config/db')
const  DataTypes = require('sequelize')

const Profile = sequelize.define('profiles',{
  bio :{
    type: DataTypes.STRING
  },
  address :{
    type: DataTypes.STRING
  },
  parentId:{
    type: DataTypes.INTEGER,
    allowNull:false
  }
})

module.exports = Profile