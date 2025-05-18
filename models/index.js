const sequelize = require('../config/db'); // make sure this returns only sequelize
const User = require('./user.model');
const Profile = require('./profile.model');

// Setup relations
User.hasOne(Profile);
Profile.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Profile
};
