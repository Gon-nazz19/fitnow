// backend/models/rutina.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const usuario = require('./usuario');

const rutina = sequelize.define('rutina', {
  id_rutina: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.TEXT },
  id_usuario: { type: DataTypes.INTEGER, references: { model: usuario, key: 'id_usuario' } }
}, {
  tableName: 'rutina',
  timestamps: false,
});

module.exports = rutina;
