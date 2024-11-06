const { DataTypes } = require('sequelize');
const Rutina = require('./rutinaModel');
const Ejercicio = require('./ejercicioModel');

module.exports = (sequelize) => {
  sequelize.define('informe',{
    id_informe: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_rutina: { 
      type: DataTypes.INTEGER, 
      references: { model: Rutina, key: 'id_rutina' } 
    },
    id_ejercicio: { 
      type: DataTypes.INTEGER, 
      references: { model: Ejercicio, key: 'id_ejercicio' } 
    },
    series: DataTypes.INTEGER,
    repeticion: DataTypes.INTEGER
  }); 
} 