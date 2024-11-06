const { models } = require('../sequelize'); // Importamos los modelos desde sequelize/index.js
const Informe = models.informe; // Obtenemos el modelo 'informe'

// Crear un nuevo informe
exports.crearInforme = async (req, res) => {
    try {
       
        const informe = await Informe.create(req.body); // Crear informe con los datos del cuerpo de la solicitud
        res.status(201).json(informe);
    } catch (error) {
        console.error('Error al crear el informe:', error);
        res.status(500).json({ error: 'Error al crear el informe' });
    }
};

// Obtener informes filtrando por ID de rutina
exports.obtenerInformesPorIdRutina = async (req, res) => {
    try {
        const idRutina = req.params.idRutina; // Cambiado para coincidir con el parámetro actualizado
        const informes = await Informe.findAll({
            where: { id_rutina: idRutina },
            order: [['id_ejercicio', 'ASC']] // Ordenar por ID de ejercicio ascendente
        });

        if (!informes.length) {
            return res.status(404).json({ error: 'No se encontró ningún informe para la rutina especificada' });
        }

        res.status(200).json(informes);
    } catch (error) {
        console.error('Error al obtener los informes:', error);
        res.status(500).json({ error: 'Error al obtener los informes' });
    }
};

// Obtener un informe específico por ID
exports.obtenerInformePorId = async (req, res) => {
    try {
        const idInforme = req.params.informeId; // Cambiado para coincidir con el parámetro actualizado
        const informe = await Informe.findOne({
            where: { id_informe: idInforme }
        });

        if (!informe) {
            return res.status(404).json({ error: 'No se encontró el informe especificado' });
        }

        res.status(200).json(informe);
    } catch (error) {
        console.error('Error al obtener el informe:', error);
        res.status(500).json({ error: 'Error al obtener el informe' });
    }
};

// Eliminar un informe específico (opcional)
// exports.eliminarInforme = async (req, res) => {
//     try {
//         const informeId = req.params.informeId;
//         await Informe.destroy({ where: { id: informeId } });
//         res.status(204).send();
//     } catch (error) {
//         console.error('Error al eliminar el informe:', error);
//         res.status(500).json({ error: 'Error al eliminar el informe' });
//     }
// };
