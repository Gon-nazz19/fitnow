const express = require('express');
const router = express.Router();
const rutinaController = require('../controllers/rutinaController');

router.get('/', rutinaController.obtenerRutinasPorUsuario); // Obtener todas las rutinas por id de usuario
router.get('/', rutinaController.obtenerNombreRutina); // Obtener nombre de la rutina
router.get('/', rutinaController.obtenerRutinasPorNombre); // Obtener todas las rutinas por nombre
router.post('/', rutinaController.crearRutina); // Crear una nueva rutina
// router.put('/:rutinaId', rutinaController.actualizarRutina); // Actualizar una rutina
// router.delete('/:rutinaId', rutinaController.eliminarRutina); // Eliminar una rutina

module.exports = router;
