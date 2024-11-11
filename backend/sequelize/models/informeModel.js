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
      references: { model: 'rutinas', key: 'id_rutina' },
      allowNull: false,
    },
    id_ejercicio: {
      type: DataTypes.INTEGER,
      references: { model: 'ejercicios', key: 'id_ejercicio' },
      allowNull: false,
    },
    series: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    repeticiones: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};