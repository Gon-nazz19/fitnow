const Rutina = require('../sequelize/models/rutinaModel');
const Ejercicio = require('../sequelize/models/ejercicioModel');

// Obtener todas las rutinas del usuario autenticado
exports.obtenerRutinasUsuario = async (req, res) => {
    try {
        const rutinas = await Rutina.findAll({ where: { id_usuario: req.usuarioId } });
        res.status(200).json({ rutinas });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las rutinas del usuario' });
    }
};

// Obtener una rutina específica del usuario
exports.obtenerRutinaPorId = async (req, res) => {
    try {
        const { rutinaId } = req.params;
        const rutina = await Rutina.findOne({ where: { id: rutinaId, id_usuario: req.usuarioId } });

        if (!rutina) {
            return res.status(404).json({ error: 'Rutina no encontrada' });
        }

        res.status(200).json({ rutina });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la rutina' });
    }
};

// Obtener todos los ejercicios de una rutina específica
exports.obtenerEjerciciosRutina = async (req, res) => {
    try {
        const { rutinaId } = req.params;
        const ejercicios = await Ejercicio.findAll({ where: { id_rutina: rutinaId } });

        if (!ejercicios.length) {
            return res.status(404).json({ error: 'No se encontraron ejercicios para esta rutina' });
        }

        res.status(200).json({ ejercicios });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los ejercicios de la rutina' });
    }
};
