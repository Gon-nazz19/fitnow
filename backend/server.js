const sequelize = require('./sequelize'); // Importamos la instancia de Sequelize
const express = require('express');
const cors = require('cors'); // Importa el middleware CORS
const app = express();
const bodyParser = require('body-parser');

// Configura CORS para permitir solicitudes desde http://localhost:3001
app.use(cors({
    origin: 'http://localhost:3001' // Especifica el origen permitido
}));

// Middlewares para procesar el body de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importar las rutas según tu estructura de archivos
const usuarioRoutes = require('./routes/usuarioRoutes');
const rutinaRoutes = require('./routes/rutinaRoutes');
const ejercicioRoutes = require('./routes/ejercicioRoutes');
const informeRoutes = require('./routes/informeRoutes');
const progresoRoutes = require('./routes/progresoRoutes');

// Montar las rutas en el enrutador principal
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/rutinas', rutinaRoutes); // Asegúrate de que esta línea esté presente
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