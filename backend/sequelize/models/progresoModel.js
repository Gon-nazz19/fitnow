const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('progreso', {
    id_progreso: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    fecha: { type: DataTypes.DATE, allowNull: false },
    peso: { type: DataTypes.FLOAT },
    id_informe: { 
      type: DataTypes.INTEGER, 
      references: { model: 'informes', key: 'id_informe' } 
    }
  });
};