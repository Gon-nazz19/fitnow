const express = require('express');
const bodyParser = require('body-parser');

// Importar las rutas según tu estructura de archivos
const usuarioRoutes = require('./routes/usuarioRoutes');
const rutinaRoutes = require('./routes/rutinaRoutes');
const ejercicioRoutes = require('./routes/ejercicioRoutes');
const informeRoutes = require('./routes/informeRoutes');
const progresoRoutes = require('./routes/progresoRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Montar las rutas en el enrutador principal
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/rutinas', rutinaRoutes);
app.use('/api/ejercicios', ejercicioRoutes);
app.use('/api/informes', informeRoutes);
app.use('/api/progresos', progresoRoutes);

module.exports = app;
