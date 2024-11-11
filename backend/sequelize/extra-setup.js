function applyExtraSetup(sequelize) {
    const { usuario, rutina, ejercicio, informe, progreso } = sequelize.models;

    // Relación entre Usuario y Rutina
    usuario.hasMany(rutina, { foreignKey: 'id_usuario' });
    rutina.belongsTo(usuario, { foreignKey: 'id_usuario' });

    // Relación entre Rutina e Informe
    rutina.hasMany(informe, { foreignKey: 'id_rutina' });
    informe.belongsTo(rutina, { foreignKey: 'id_rutina' });

    // Relación entre Ejercicio e Informe
    ejercicio.hasMany(informe, { foreignKey: 'id_ejercicio' });
    informe.belongsTo(ejercicio, { foreignKey: 'id_ejercicio' });

    // Relación entre Informe y Progreso
    informe.hasMany(progreso, { foreignKey: 'id_informe' });
    progreso.belongsTo(informe, { foreignKey: 'id_informe' });
}

module.exports = { applyExtraSetup };