const Rutina = require('../sequelize/models/rutinaModel');

// Obtener todas las rutinas por id de usuario
exports.obtenerRutinasPorUsuario = async (req, res) => {
    try {
        const IdUsuario = req.params;
        const rutinas = await Rutina.findAll(
            req.body, {where: {id_usuario: IdUsuario}}
        );
        res.status(200).json(rutinas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las rutinas' });
    }
};

// Obtener nombre de la rutina
exports.obtenerNombreRutina = async (req, res) => {
    try {
        const rutina = await Rutina.findByPk(req.params.id, {
            attributes: ['nombre'] // Seleccionar solo el nombre de la rutina
        });
        res.status(200).json({ nombre: rutina.nombre });
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
        const nombreABuscar = req.params;
        const rutinas = await Rutina.findAll(
            req.body, {where: {nombre: nombreABuscar}}
        );
        res.status(200).json(rutinas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las rutinas' });
    }
};
// Actualizar una rutina específica (Ver si se deja o lo mandamos al joraca)
/*exports.actualizarRutina = async (req, res) => {
    try {
        const { rutinaId } = req.params;
        const rutina = await Rutina.update(req.body, { where: { id: rutinaId } });
        res.status(200).json(rutina);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la rutina' });
    }
};*/

// Eliminar una rutina específica (Ver si se deja o lo mandamos de sabatico)
/*exports.eliminarRutina = async (req, res) => {
    try {
        const { rutinaId } = req.params;
        await Rutina.destroy({ where: { id: rutinaId } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la rutina' });
    }
};*/