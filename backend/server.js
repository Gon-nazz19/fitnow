const app = require('./express/app');
const sequelize = require('./sequelize');
const PORT = 8080;

async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}

async function init() {
    await assertDatabaseConnectionOk();

    console.log('Sincronizando la base de datos...');
    await sequelize.sync({ alter: true }); // Sincroniza los modelos,  alter:true es importante en producción!
    console.log('Base de datos sincronizada.');

    app.listen(PORT, () => {
        console.log(`Servidor Express escuchando en el puerto ${PORT}`);
    });
}


init();