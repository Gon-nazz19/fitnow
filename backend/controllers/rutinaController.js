const Rutina = require('../sequelize/models/rutinaModel');

// Obtener todas las rutinas
exports.obtenerRutinas = async (req, res) => {
    try {
        const rutinas = await Rutina.findAll();
        res.status(200).json(rutinas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las rutinas' });
    }
};

// Crear una nueva rutina
exports.crearRutina = async (req, res) => {
    try {
        const rutina = await Rutina.create(req.body);
        res.status(201).json(rutina);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la rutina' });
    }
};

// Actualizar una rutina específica (Ver si de deja o lo mandamos al joraca)
exports.actualizarRutina = async (req, res) => {
    try {
        const { rutinaId } = req.params;
        const rutina = await Rutina.update(req.body, { where: { id: rutinaId } });
        res.status(200).json(rutina);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la rutina' });
    }
};

// Eliminar una rutina específica (Ver si de deja o lo mandamos de sabatico)
exports.eliminarRutina = async (req, res) => {
    try {
        const { rutinaId } = req.params;
        await Rutina.destroy({ where: { id: rutinaId } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la rutina' });
    }
};
