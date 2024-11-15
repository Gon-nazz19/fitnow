const { models } = require('../sequelize'); // Importamos los modelos desde sequelize/index.js
const Informe = models.informe; // Obtenemos el modelo 'informe'

// Obtener informes filtrando por rutina
exports.obtenerInformesPorIdRutina = async (req, res) => {
    try {
        const idRutina = req.params.idRutina;
        const informes = await Informe.findAll({
            where: { id_rutina: idRutina }
        });
        
        if (!informes.length) {
            return res.status(404).json({ error: 'No se encontraron informes para esta rutina' });
        }

        res.status(200).json(informes);
    } catch (error) {
        console.error('Error al obtener los informes:', error);
        res.status(500).json({ error: 'Error al obtener los informes' });
    }
};
// Obtener un informe por id 
exports.obtenerInformePorId = async (req, res) => {
    try {
        const { idInforme } = req.params; // Extract idInforme from req.params
        const informe = await Informe.findOne({
            where: { id_informe: idInforme } // Correctly handle the where clause
        });
        
        if (!informe) {
            return res.status(404).json({ error: 'No se encontró el informe especificado' });
        }

        res.status(200).json(informe); // Use status 200 for successful GET request
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el informe' });
    }
};

// Crear un nuevo informe
exports.crearInforme = async (req, res) => {
    try {
        const informe = await Informe.create(req.body); // Use the correct model reference
        res.status(201).json(informe);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el informe' });
    }
};

// Eliminar un informe especifico
exports.eliminarInforme = async (req, res) => {
    try {
        const { informeId } = req.params; // Extract informeId from req.params
        await Informe.destroy({ where: { id_informe: informeId } }); // Correctly handle the where clause
        res.status(204).send(); // Use status 204 for successful DELETE request
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el informe' });
    }
};