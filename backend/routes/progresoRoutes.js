const express = require('express');
const router = express.Router();
const progresoController = require('../controllers/progresoController');

// Registrar progreso de un ejercicio
router.post('/', progresoController.registrarProgreso);

// Obtener datos de progreso para gráficos
router.get('/grafico/:informeId', progresoController.obtenerProgresoParaGrafico);

module.exports = router;