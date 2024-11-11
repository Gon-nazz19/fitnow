const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('rutina', {
    id_rutina: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: { model: 'usuarios', key: 'id_usuario' },
      allowNull: false,
    },
  });
};