const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Informe = require('./informeModel');

const Progreso = sequelize.define('Progreso', {
  id_progreso: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fecha: { type: DataTypes.DATE, allowNull: false },
  peso: { type: DataTypes.FLOAT },
  id_informe: { type: DataTypes.INTEGER, references: { model: Informe, key: 'id_informe' } }
}, {
  tableName: 'Progreso',
  timestamps: false,
});

module.exports = Progreso;
