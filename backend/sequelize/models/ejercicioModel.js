const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('usuarioModel',{
    id_ejercicio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre:DataTypes.STRING, 
    descripcion: DataTypes.STRING,
    grupomuscular:  DataTypes.STRING,
    url_video_imagen:DataTypes.STRING,
  });
}