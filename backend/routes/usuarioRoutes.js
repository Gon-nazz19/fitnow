const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Ruta para registrar un nuevo usuario
router.post('/', usuarioController.crearUsuario);

// Ruta para iniciar sesión
router.post('/:id', usuarioController.obtenerUsuario); // Cambiar (se filtra por nombre y contraseña)

module.exports = router;
