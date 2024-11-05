const { models } = require('../sequelize');
const Informe = models.informe;
const { DataTypes } = require('sequelize');
const Rutina = require('./rutinaModel');
const Ejercicio = require('./ejercicioModel');

module.exports = (sequelize) => {
  sequelize.define('informe', {
    id_informe: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_rutina: { 
      type: DataTypes.INTEGER, 
      references: { model: Rutina, key: 'id_rutina' } 
    },
    id_ejercicio: { 
      type: DataTypes.INTEGER, 
      references: { model: Ejercicio, key: 'id_ejercicio' } 
    },
    series: { type: DataTypes.INTEGER },
    repeticion: { type: DataTypes.INTEGER }
  });
}

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
        console.error('Error al obtener los informes:', error);
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
        console.error('Error al obtener el informe:', error);
        res.status (500).json({ error: 'Error al obtener el informe' });
    }
};