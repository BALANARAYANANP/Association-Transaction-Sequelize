const express = require('express')
const sequelize = require('./config/db')
const Parents = require('./models/parent')
const Childss = require('./models/chilld')
const Profile = require('./models/profiles')
const Skill = require('./models/skill');
const router = require('./router/userRoutes');
const ProfileSkills = require('./models/ParentSkill')


const app = express()
app.use(express.json())

app.use('/', router)
//  Associations
Parents.hasMany(Childss, { foreignKey: 'parentId' });
Childss.belongsTo(Parents, { foreignKey: 'parentId' });

Parents.hasOne(Profile, { foreignKey: 'parentId' });
Profile.belongsTo(Parents, { foreignKey: 'parentId' })

Parents.belongsToMany(Skill, { through: 'ParentSkills' });
Skill.belongsToMany(Parents, { through: 'ParentSkills' });



(async () => {
  try {
    await sequelize.sync({ force: true });
    app.listen(3000, () => {
      console.log("Server is Running on Port 3000")
    })

  } catch (err) {
    console.log(err);
  }
})();
