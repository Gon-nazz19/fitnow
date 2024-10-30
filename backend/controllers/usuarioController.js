const Usuario = require('../sequelize/models/usuarioModel');

// Obtener un usuario
exports.obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id); // Modificar (filtrar por usuario y contraseña)
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

// Crear un nuevo usuario
exports.crearUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

// Obtener nombre del usuario
exports.obtenerNombreUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id, {
            attributes: ['nombre'] // Seleccionar solo el nombre del usuario
        });
        res.status(200).json({ nombre: usuario.nombre });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el nombre del usuario' });
    }
};
