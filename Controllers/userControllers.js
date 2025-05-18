const sequelize = require('../config/db');
const Childss = require('../models/chilld');
const Parents = require('../models/parent');
const Profile = require('../models/profiles');
const Skill = require('../models/skill');

const createParentAndChild = async (req, res) => {
    const { p, c , prof, skillNames} = req.body;
    console.log(skillNames)

    const t = await sequelize.transaction();
    try {
        // Step 1: Create parent
        const parent = await Parents.create({

            fname : p.fname,
            age: p.age

        }, { transaction: t }); 

        const child = await Childss.create({
          lname: c.lname,
          age: c.age,
          parentId: parent.id, 
        }, { transaction: t });

        const profile = await Profile.create({

            bio : prof.bio,
            address : prof.address,
            parentId: parent.id, 
        }, {transaction : t } );
        
        const skills = await Promise.all(
            skillNames.map(name =>
              Skill.findOrCreate({ where: { name }, transaction: t }).then(([skill]) => skill)
            )
          );
        

        await t.commit(); 

        res.status(200).send({
            message: 'All tables Create Succuessfully',
            parent,
            child, profile , skills
        });
    } catch (err) {
        await t.rollback(); 
        console.log("Error Occurred: " + err.message);
        res.status(500).send({ error: err.message });
    }
};

module.exports = { createParentAndChild };
