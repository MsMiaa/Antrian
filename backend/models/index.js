const sequelize = require('../config/database');
const User = require('./User');
const Loket = require('./Loket');
const Antrian = require('./Antrian');

// relasi
Loket.hasMany(Antrian, { foreignKey: 'loketId' });
Antrian.belongsTo(Loket, { foreignKey: 'loketId' });

module.exports = {
  sequelize,
  User,
  Loket,
  Antrian,
};
