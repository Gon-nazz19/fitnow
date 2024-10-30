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
        const ejercicios = await Ejercicio.update(req.body, { where: { id: ejercicioId } });
        res.status(200).json(ejercicios);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el ejercicio' });
    }
};


// Obtener todas las ejercicios por nombre
exports.obtenerEjercicioPorNombre = async (req, res) => {
    try {
        const nombreABuscar = req.params;
        const ejercicios = await Ejercicio.findAll(
            req.body, {where: {nombre: nombreABuscar}}
        );
        res.status(200).json(ejercicios);
    } catch (error) {
        res.status(500).json({ error: 'No se encontró ningún ejercicio con este nombre' });
    }
};
