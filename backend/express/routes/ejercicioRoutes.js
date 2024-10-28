const express = require('express');
const router = express.Router();
const ejercicioController = require('../controllers/ejercicioController');

router.get('/', ejercicioController.listarEjercicios); // Listar todos los ejercicios
router.put('/:ejercicioId', ejercicioController.actualizarEjercicio); // Actualizar un ejercicio específico

module.exports = router;
