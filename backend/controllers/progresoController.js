const { models } = require('../sequelize'); // Importamos los modelos desde sequelize/index.js
const Progreso = models.progreso; // Obtenemos el modelo 'progreso'

// Registrar el progreso de un ejercicio
exports.registrarProgreso = async (req, res) => {
    try {
        const progreso = await Progreso.create(req.body);
        res.status(201).json(progreso);
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el progreso' });
    }
};

// Obtener el progreso de un ejercicio para gráficos
exports.obtenerProgresoParaGrafico = async (req, res) => {
    try {
        const informeId = req.params.informeId;

        const progresos = await Progreso.findAll({
            where: { id_informe: informeId },
            order: [['fecha', 'ASC']], // Ordenar por fecha ascendente
            attributes: ['fecha', 'peso'] // Seleccionar solo fecha y peso
        });

        if (!progresos.length) {
            return res.status(404).json({ error: 'No se encontró progreso para el ejercicio especificado' });
        }

        res.status(200).json(progresos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el progreso para gráficos' });
    }
};