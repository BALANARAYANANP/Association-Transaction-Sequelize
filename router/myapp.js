

// User model
const User = sequelize.define('User', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
  });
   
  // Address model
  const Address = sequelize.define('Address', {
    street: Sequelize.STRING,
    city: Sequelize.STRING,
  });
   
  // Association
  User.hasOne(Address, { foreignKey: 'userId' });
  Address.belongsTo(User, { foreignKey: 'userId' });
   
   
   
  async function registerUserWithAddress(userData, addressData) {
    const t = await sequelize.transaction();
   
    try {
      // Insert user
      const user = await User.create({
        name: userData.name,
        email: userData.email,
      }, { transaction: t });
      // Insert address
      await Address.create({
       street: addressData.street,
        city: addressData.city,
        userId: user.id,
     }, { transaction: t });
   
     // Commit if both succeed
      await t.commit();
      console.log('User and address saved successfully.');
    } catch (err) {
      // Rollback if any fails
      await t.rollback();
      console.error('Error occurred, transaction rolled back:', err);
    }
  }
   
   
  registerUserWithAddress(
    { name: 'John Doe', email: 'john@example.com' },
    { street: '123 Main St', city: 'New York' }
  );
   
   
   