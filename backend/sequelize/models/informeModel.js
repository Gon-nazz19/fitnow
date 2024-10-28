// backend/models/Informe.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Rutina = require('./rutinaModel');
const Ejercicio = require('./ejercicioModel');

const Informe = sequelize.define('Informe', {
  id_informe: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_rutina: { type: DataTypes.INTEGER, references: { model: Rutina, key: 'id_rutina' } },
  id_ejercicio: { type: DataTypes.INTEGER, references: { model: Ejercicio, key: 'id_ejercicio' } },
  series: { type: DataTypes.INTEGER },
  repeticion: { type: DataTypes.INTEGER }
}, {
  tableName: 'Informe',
  timestamps: false,
});

module.exports = Informe;
