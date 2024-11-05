const express = require('express');
const router = express.Router();
const ejercicioController = require('../controllers/ejercicioController');

router.get('/', ejercicioController.listarEjercicios); // Listar todos los ejercicios
router.get('/buscarNombre/:nombre', ejercicioController.obtenerEjercicioPorNombre); // Filtrar ejercicios por nombre
router.put('/:ejercicioId', ejercicioController.actualizarEjercicio); // Actualizar un ejercicio específico
router.post('/', ejercicioController.crearEjercicio); // Crear un nuevo ejercicio

module.exports = router;