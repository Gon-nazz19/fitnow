const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Ruta para registrar un nuevo usuario
router.post('/register', usuarioController.registrarUsuario);

// Ruta para iniciar sesión
router.post('/login', usuarioController.loginUsuario);

module.exports = router;
