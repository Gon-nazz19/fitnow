// backend/controllers/progresoController.js
const { models } = require('../sequelize');
const Progreso = models.progreso;
const { zonedTimeToUtc } = require('date-fns-tz');

exports.registrarProgreso = async (req, res) => {
  try {
    const { fecha, peso, id_informe } = req.body;
    
    // La fecha ya viene ajustada desde el frontend, solo la guardamos
    const progreso = await Progreso.create({ 
      fecha: fecha,
      peso, 
      id_informe 
    });
    
    res.status(201).json(progreso);
  } catch (error) {
    console.error('Error al registrar el progreso:', error);
    res.status(500).json({ error: 'Error al registrar el progreso' });
  }
};

exports.obtenerProgresoParaGrafico = async (req, res) => {
  try {
    const { informeId } = req.params;
    console.log('Buscando progresos para informe:', informeId);

    const progresos = await Progreso.findAll({
      where: { id_informe: informeId },
      order: [['fecha', 'ASC']],
      attributes: ['fecha', 'peso']
    });

    res.status(200).json(progresos);
  } catch (error) {
    console.error('Error al obtener progresos:', error);
    res.status(500).json({ error: 'Error al obtener el progreso para gráficos' });
  }
};