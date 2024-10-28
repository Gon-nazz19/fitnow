const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Aquí puedes cambiar la ubicación del archivo de la base de datos
});

module.exports = sequelize;

