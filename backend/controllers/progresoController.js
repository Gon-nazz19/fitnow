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
        const { informeId } = req.params; // Make sure we're getting informeId from params
        console.log('Buscando progresos para informe:', informeId); // Debug log

        const progresos = await Progreso.findAll({
            where: { id_informe: informeId },
            order: [['fecha', 'ASC']],
            attributes: ['fecha', 'peso']
        });

        // Send empty array instead of 404 if no data found
        res.status(200).json(progresos || []);

    } catch (error) {
        console.error('Error al obtener progresos:', error); // Debug log
        res.status(500).json({ error: 'Error al obtener el progreso para gráficos' });
    }
};