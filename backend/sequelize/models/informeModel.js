const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('informe', {
    id_informe: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_rutina: { 
      type: DataTypes.INTEGER, 
      references: { model: 'rutinas', key: 'id_rutina' } 
    },
    id_ejercicio: { 
      type: DataTypes.INTEGER, 
      references: { model: 'ejercicios', key: 'id_ejercicio' } 
    },
    series: { type: DataTypes.INTEGER },
    repeticion: { type: DataTypes.INTEGER }
  });
}