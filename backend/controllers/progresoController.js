const Progreso = require('../sequelize/models/progresoModel');

// Registrar peso de un ejercicio
exports.registrarProgreso = async (req, res) => {
    try {
        const progreso = await Progreso.create(req.body);
        res.status(201).json(progreso);
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el progreso' });
    }
};

// Obtener progreso de un ejercicio para gráficos
exports.obtenerProgresoParaGrafico = async (req, res) => {
    try {
        const { ejercicioId } = req.params;

        const progresos = await Progreso.findAll({
            where: { id_ejercicio: ejercicioId },
            order: [['fecha', 'ASC']], // Ordenar por fecha en orden ascendente
            attributes: ['fecha', 'peso', 'repeticiones'] // Seleccionar solo los campos necesarios
        });

        if (!progresos.length) {
            return res.status(404).json({ error: 'No se encontró progreso para el ejercicio especificado' });
        }

        res.status(200).json(progresos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el progreso para gráficos' });
    }
};
