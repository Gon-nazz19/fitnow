const express = require('express');
const router = express.Router();
const informeController = require('../controllers/informeController.js');

// Rutas para Informes
router.get('/rutina/:idRutina', informeController.obtenerInformesPorIdRutina); // Obtener todos los informes de una rutina por su ID
router.get('/:informeId', informeController.obtenerInformePorId); // Obtener un informe específico por ID
router.post('/', informeController.crearInforme); // Crear un nuevo informe

// Opcionales
// router.put('/:informeId', informeController.actualizarInforme); // Actualizar un informe específico
// router.delete('/:informeId', informeController.eliminarInforme); // Eliminar un informe específico

module.exports = router;
