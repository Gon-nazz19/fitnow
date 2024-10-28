const Usuario = require('./usuarioModel');
const Rutina = require('./rutinaModel');
const Ejercicio = require('./ejercicioModel');
const Informe = require('./informeModel');
const Progreso = require('./progresoModel');

// Relación entre Usuario y Rutina
Usuario.hasMany(Rutina, { foreignKey: 'id_usuario' });
Rutina.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Relación entre Rutina e Informe
Rutina.hasMany(Informe, { foreignKey: 'id_rutina' });
Informe.belongsTo(Rutina, { foreignKey: 'id_rutina' });

// Relación entre Ejercicio e Informe
Ejercicio.hasMany(Informe, { foreignKey: 'id_ejercicio' });
Informe.belongsTo(Ejercicio, { foreignKey: 'id_ejercicio' });

// Relación entre Informe y Progreso
Informe.hasMany(Progreso, { foreignKey: 'id_informe' });
Progreso.belongsTo(Informe, { foreignKey: 'id_informe' });

module.exports = { Usuario, Rutina, Ejercicio, Informe, Progreso };
