const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Loket = require('./Loket');

const Antrian = sequelize.define('Antrian', {
  nomor: { type: DataTypes.STRING, allowNull: false },
  nama: { type: DataTypes.STRING, allowNull: false },
  pelayanan: { type: DataTypes.ENUM('pin', 'verifikasi'), allowNull: false },
  status: { type: DataTypes.ENUM('menunggu', 'dipanggil', 'selesai'), defaultValue: 'menunggu' }
});

Antrian.belongsTo(Loket, { foreignKey: 'loketId' });

module.exports = Antrian;
