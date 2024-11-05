const { where } = require('sequelize');
const Informe = require('../sequelize/models/informeModel');

// Obtener informes filtrando por rutina
exports.obtenerInformesPorIdRutina = async (req, res) => {
    try {
        const IdRutina = req.params.IdRutina;
        const informes = await Informe.findAll({
            where: { id_rutina: IdRutina },
            order: [['id_ejercicio', 'ASC']]
        });
        
        if (!informes.length) {
            return res.status(404).json({ error: 'No se encontró ningun informe especificado' });
        }

        res.status(200).json(informes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los informes' });
    }
};

// Obtener un informe por id 
exports.obtenerInformePorId = async (req, res) => {
    try {
        const IdInforme = req.params.IdInforme;
        const informe = await Informe.findOne({
            where: { id_informe: IdInforme }
        });
        
        if (!informe) {
            return res.status(404).json({ error: 'No se encontró el informe especificado' });
        }

        res.status(200).json(informe);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el informe' });
    }
};

// Crear un nuevo informe
exports.crearInforme = async (req, res) => {
    try {
        const informe = await informeModel.create(req.body);
        res.status(201).json(informe);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el informe' });
    }
};

// Eliminar un informe especifico (Ver si se deja o lo mandamos a narnia)
/*exports.eliminarInforme = async (req, res) => {
    try {
        const { informeId } = req.params;
        await Informe.destroy({ where: { id: informeId } });
        res.status(204).send();
    } catch (error) {
        res.status 500).json({ error: 'Error al eliminar el informe' });
    }
};*/