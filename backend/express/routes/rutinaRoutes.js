const express = require('express');
const router = express.Router();
const rutinaController = require('../controllers/rutinaController');

router.get('/', rutinaController.obtenerRutinas); // Obtener todas las rutinas
router.post('/', rutinaController.crearRutina); // Crear una nueva rutina
router.put('/:rutinaId', rutinaController.actualizarRutina); // Actualizar una rutina
router.delete('/:rutinaId', rutinaController.eliminarRutina); // Eliminar una rutina

module.exports = router;

