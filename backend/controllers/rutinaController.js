const { models } = require('../sequelize'); // Importamos los modelos desde sequelize/index.js
const Rutina = models.rutina; // Obtenemos el modelo 'rutina'

// Obtener todas las rutinas por ID de usuario
exports.obtenerRutinasPorUsuario = async (req, res) => {
    try {
        const idUsuario = req.params.idUsuario;
        const rutinas = await Rutina.findAll({ where: { id_usuario: idUsuario } });
        res.status(200).json(rutinas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las rutinas' });
    }
};

// Obtener solo el nombre de una rutina por ID
exports.obtenerNombreRutina = async (req, res) => {
    try {
        const rutina = await Rutina.findByPk(req.params.id, {
            attributes: ['nombre'], // Seleccionar solo el nombre de la rutina
        });
        res.status(200).json({ nombre: rutina ? rutina.nombre : null });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el nombre de la rutina' });
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

// Obtener todas las rutinas por nombre
exports.obtenerRutinasPorNombre = async (req, res) => {
    try {
        const nombreABuscar = req.params.nombre;
        const rutinas = await Rutina.findAll({ where: { nombre: nombreABuscar } });
        res.status(200).json(rutinas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las rutinas' });
    }
};

// (Opcional) Actualizar una rutina específica
/*
exports.actualizarRutina = async (req, res) => {
    try {
        const rutinaId = req.params.id;
        const [updated] = await Rutina.update(req.body, { where: { id: rutinaId } });
        if (!updated) return res.status(404).json({ error: 'Rutina no encontrada' });
        const rutina = await Rutina.findByPk(rutinaId);
        res.status(200).json(rutina);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la rutina' });
    }
};
*/

// (Opcional) Eliminar una rutina específica
/*
exports.eliminarRutina = async (req, res) => {
    try {
        const rutinaId = req.params.id;
        const deleted = await Rutina.destroy({ where: { id: rutinaId } });
        if (!deleted) return res.status(404).json({ error: 'Rutina no encontrada' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la rutina' });
    }
};
*/