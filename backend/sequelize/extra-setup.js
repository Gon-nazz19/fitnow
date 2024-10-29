function applyExtraSetup(sequelize) {
    const Usuario = sequelize.models.usuario;
    const Rutina = sequelize.models.rutina;
    const Ejercicio = sequelize.models.ejercicio;
    const Informe = sequelize.models.informe;
    const Progreso = sequelize.models.progreso;

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
}


module.exports = { applyExtraSetup };
