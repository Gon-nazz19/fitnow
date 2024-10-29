const app = require('./app');
const sequelize = require('./sequelize');

// Importar las rutas según tu estructura de archivos
const usuarioRoutes = require('./routes/usuarioRoutes');
const rutinaRoutes = require('./routes/rutinaRoutes');
const ejercicioRoutes = require('./routes/ejercicioRoutes');
const informeRoutes = require('./routes/informeRoutes');
const progresoRoutes = require('./routes/progresoRoutes');

//configuracion base de datos
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Montar las rutas en el enrutador principal
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/rutinas', rutinaRoutes);
app.use('/api/ejercicios', ejercicioRoutes);
app.use('/api/informes', informeRoutes);
app.use('/api/progresos', progresoRoutes);

async function iniciarServidor() {
    try {
        await db.sync(); // Creates the tables if they do not exist
        console.log('Modelos sincronizados con la base de datos.');

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
}



init();