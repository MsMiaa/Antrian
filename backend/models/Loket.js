const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Loket = sequelize.define('Loket', {
  nama: { type: DataTypes.STRING, allowNull: false },
  jenis_pelayanan: { type: DataTypes.ENUM('pin', 'verifikasi'), allowNull: false }
});

module.exports = Loket;
