const  sequelize = require('./sequelize'); // Importamos la instancia de Sequelize
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Importar las rutas según tu estructura de archivos
const usuarioRoutes = require('./routes/usuarioRoutes');
const rutinaRoutes = require('./routes/rutinaRoutes');
const ejercicioRoutes = require('./routes/ejercicioRoutes');
const informeRoutes = require('./routes/informeRoutes');
const progresoRoutes = require('./routes/progresoRoutes');

// Middlewares para procesar el body de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Montar las rutas en el enrutador principal
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/rutinas', rutinaRoutes);
app.use('/api/ejercicios', ejercicioRoutes);
app.use('/api/informes', informeRoutes);
app.use('/api/progresos', progresoRoutes);

// Función para iniciar el servidor y sincronizar la base de datos
async function iniciarServidor() {
    try {
        await sequelize.sync(); // Sincroniza las tablas con la base de datos
        console.log('Modelos sincronizados con la base de datos.');

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
}

// Llamamos a la función para iniciar el servidor
iniciarServidor();
