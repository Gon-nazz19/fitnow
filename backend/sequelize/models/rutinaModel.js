const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('rutina', {
    id_rutina: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING, 
    descripcion: DataTypes.STRING,
    id_usuario: { 
      type: DataTypes.INTEGER, 
      references: { model: 'usuarios', key: 'id_usuario' } 
    }
  });
}