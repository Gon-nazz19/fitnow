const { models } = require('../sequelize'); // Importamos los modelos desde sequelize/index.js
const Ejercicio = models.ejercicio; // Obtenemos el modelo 'ejercicio'

// Crear un nuevo ejercicio
exports.crearEjercicio = async (req, res) => {
    try {
        const ejercicio = await Ejercicio.create(req.body); // Crear ejercicio con los datos recibidos en req.body
        res.status(201).json(ejercicio); // Responder con el ejercicio creado y un status 201
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el ejercicio' }); // Manejo de errores
    }
};

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
        const ejercicioId = req.params.ejercicioId;
        const ejercicios = await Ejercicio.update(req.body, { where: { id_ejercicio: ejercicioId } });
        res.status(200).json(ejercicios);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar el ejercicio' });
    }
};

// Obtener ejercicios por nombre
exports.obtenerEjercicioPorNombre = async (req, res) => {
    try {
        const nombreABuscar = req.params.nombre;
        const ejercicios = await Ejercicio.findAll({
            where: { nombre: nombreABuscar }
        });
        res.status(200).json(ejercicios);
    } catch (error) {
        res.status(500).json({ error: 'No se encontró ningún ejercicio con este nombre' });
    }
};
