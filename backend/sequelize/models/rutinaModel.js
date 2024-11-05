const { DataTypes } = require('sequelize');
const Usuario = require('./usuarioModel');

module.exports = (sequelize) => {
  sequelize.define('rutina',{
    id_rutina: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING, 
    descripcion: DataTypes.STRING,
    id_usuario: { type: DataTypes.INTEGER, references: { model: Usuario, key: 'id_usuario' } }
  });
}