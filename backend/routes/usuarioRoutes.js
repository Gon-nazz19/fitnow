const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Ruta para registrar un nuevo usuario
router.post('/', usuarioController.crearUsuario);

// Ruta para obtener un usuario por nombre y contraseña
router.get('/login', usuarioController.obtenerUsuarioPorEmailYContraseña);

// Ruta para iniciar sesión
router.post('/login', usuarioController.iniciarSesion);


// Ruta para obtener solo el nombre de un usuario por ID
router.get('/:id/nombre', usuarioController.obtenerNombreUsuario);


module.exports = router;
