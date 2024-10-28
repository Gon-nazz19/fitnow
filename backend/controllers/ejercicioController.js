const Ejercicio = require('../sequelize/models/ejercicioModel');

// Listar todos los ejercicios
exports.listarEjercicios = async (req, res) => {
    try {
        const ejercicios = await Ejercicio.findAll();
        res.status(200).json(ejercicios);
    } catch (error) {
        res.status(500).json({ error: 'Error al listar los ejercicios' });
    }
};

// Actualizar un ejercicio específico
exports.actualizarEjercicio = async (req, res) => {
    try {
        const { ejercicioId } = req.params;
        const ejercicio = await Ejercicio.update(req.body, { where: { id: ejercicioId } });
        res.status(200).json(ejercicio);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el ejercicio' });
    }
};
