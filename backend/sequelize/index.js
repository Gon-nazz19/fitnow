const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../db.sqlite',
  logQueryParameters: true,
  benchmark: true,
});

const modelDefiners = [
  require('./models/ejercicioModel'),
  require('./models/informeModel'),
  require('./models/progresoModel'),
  require('./models/rutinaModel'),
  require('./models/usuarioModel'),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

// Exportamos tanto sequelize como los modelos
module.exports = {
  sequelize,
  models: sequelize.models,
};
