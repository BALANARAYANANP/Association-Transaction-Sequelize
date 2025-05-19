const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ParentSkill = sequelize.define('ParentSkill', {
  parentId: {
    type: DataTypes.INTEGER,
    primaryKey : true,
    references: {
      model: 'Parents',
      key: 'id'
    }
  },
  skillId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Skills',
      key: 'id'
    }
  }
});

module.exports = ParentSkill;
