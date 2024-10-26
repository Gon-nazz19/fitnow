const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ejercicio = sequelize.define('Ejercicio', {
  id_ejercicio: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.TEXT },
  grupo_muscular: { type: DataTypes.STRING },
  url_video_imagen: { type: DataTypes.STRING }
}, {
  tableName: 'Ejercicio',
  timestamps: false,
});

module.exports = Ejercicio;
