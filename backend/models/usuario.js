const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  edad: { type: DataTypes.INTEGER },
  peso: { type: DataTypes.FLOAT },
  altura: { type: DataTypes.FLOAT },
  sexo: { type: DataTypes.STRING },
  contraseña: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'Usuario',
  timestamps: false,
});

module.exports = Usuario;
