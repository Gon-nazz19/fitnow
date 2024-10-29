const { DataTypes } = require('sequelize');
const Informe = require('./informeModel');

module.exports = (sequelize) => {
  sequelize.define('progreso',{
    id_progreso: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    fecha: { type: DataTypes.DATE, allowNull: false },
    peso: { type: DataTypes.FLOAT },
    id_informe: { type: DataTypes.INTEGER, references: { model: Informe, key: 'id_informe' } }
  });
} 
