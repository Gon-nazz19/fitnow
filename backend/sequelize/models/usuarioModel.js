const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('usuario', {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.FLOAT,
    altura: DataTypes.FLOAT,
    sexo: DataTypes.STRING,
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false, // Asegúrate de que no permite valores nulos
    },
  });
};