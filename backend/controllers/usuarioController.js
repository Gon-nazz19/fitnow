const { models } = require('../sequelize'); // Importamos los modelos desde sequelize/index.js
const Usuario = models.usuario; // Obtenemos el modelo 'usuario'

// Obtener un usuario por ID (borrable)
exports.obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    console.log(`Buscando usuario con ID: ${req.params.id}`);
    console.log(usuario); // Para verificar si devuelve el usuario o es `null`
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

// Obtener un usuario por email y contrasena
exports.obtenerUsuarioPorEmailYcontrasena = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son obligatorios.' });
    }

    const usuario = await Usuario.findOne({
      where: {
        email: email,
        contrasena: password
      }
    });

    if (!usuario) {
      return res.status(401).json({ error: 'Correo o contraseña incorrectos' });
    }

    res.status(200).json(usuario); // Si el usuario existe, responde con los datos del usuario
  } catch (error) {
    console.error('Error al autenticar el usuario:', error);
    res.status(500).json({ error: 'Error al autenticar el usuario' });
  }
}
// Crear un nuevo usuario
exports.crearUsuario = async (req, res) => {
  try {
    console.log(req.body); // Verifica que los datos se reciben correctamente
    const usuario = await Usuario.create(req.body); // Crear usuario con los datos recibidos
    res.status(201).json(usuario);
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ error: 'Error al crear el usuario: ' + error });
  }
};

// Obtener solo el nombre de un usuario por ID
exports.obtenerNombreUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id, {
      attributes: ['nombre'],
    });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({ nombre: usuario.nombre });
  } catch (error) {
    console.error('Error al obtener el nombre del usuario:', error);
    res.status(500).json({ error: 'Error al obtener el nombre del usuario' });
  }
};
