const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
});

const modelDefiners = [
    require('./models/usuarioModel'),
    require('./models/ejercicioModel'),
    require('./models/informeModel'),
    require('./models/progresoModel'),
    require('./models/rutinaModel')
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

sequelize.sync({ force: false }) // Usa { force: false } para evitar eliminar y recrear las tablas
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to create tables, shutting down...', err);
        process.exit(1);
    });

module.exports = sequelize;