const express = require('express');
const sequelize = require('./config/database');
const { Usuario, Rutina, Ejercicio, Informe, Progreso } = require('./models');

const app = express();
app.use(express.json());

sequelize.sync({ force: false }) // Cambia a 'true' solo si deseas sobrescribir las tablas existentes
  .then(() => {
    console.log('Base de datos y tablas sincronizadas');
  })
  .catch(err => console.log('Error al sincronizar la base de datos:', err));

// Rutas y otros middlewares

app.listen(5000, () => {
  console.log('Servidor corriendo en el puerto 5000');
});



