const express = require('express');
const router = express.Router();
const rutinaController = require('../controllers/rutinaController');

router.get('/obtenerPorUsuario/:idUsuario', rutinaController.obtenerRutinasPorUsuario); // Obtener todas las rutinas por id de usuario
router.get('/:id/nombre', rutinaController.obtenerNombreRutina); // Obtener nombre de la rutina
router.get('/buscarNombre/:nombre', rutinaController.obtenerRutinasPorNombre); // Obtener todas las rutinas por nombre
router.post('/', rutinaController.crearRutina); // Crear una nueva rutina

// router.put('/:rutinaId', rutinaController.actualizarRutina); // Actualizar una rutina
// router.delete('/:rutinaId', rutinaController.eliminarRutina); // Eliminar una rutina

module.exports = router;