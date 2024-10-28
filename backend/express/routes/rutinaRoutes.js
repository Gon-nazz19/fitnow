
const express = require('express');
const router = express.Router();
const rutinaController = require('../controllers/rutinaController');
const authMiddleware = require('../middleware/authMiddleware');

// Rutas protegidas
router.get('/', authMiddleware, rutinaController.obtenerRutinasUsuario); // Obtener todas las rutinas del usuario
router.get('/:rutinaId', authMiddleware, rutinaController.obtenerRutinaPorId); // Obtener una rutina específica
router.get('/:rutinaId/ejercicios', authMiddleware, rutinaController.obtenerEjerciciosRutina); // Obtener ejercicios de una rutina

module.exports = router;
