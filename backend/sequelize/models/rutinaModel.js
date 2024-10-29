const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('usuarioModel',{
    id_rutina: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING, 
    descripcion: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER,
  });
}
