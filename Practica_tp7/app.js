const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

const configuracion = require('./config.json');
const personaController = require('./controller/personaController');
const usuarioController = require('./controller/usuarioController');

// Importar db.js para asegurar la conexión
require('./db');

app.use('/api/persona', personaController);
app.use('/api/usuario', usuarioController);

app.listen(configuracion.server.port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Servidor escuchando en el puerto ${configuracion.server.port}`);
  }
});
