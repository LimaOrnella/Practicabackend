const db = require('../db'); // Configuración de la conexión a la base de datos

const personaModel = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM persona', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
  getByApellido: (apellido) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM persona WHERE apellido = ?', [apellido], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },

  create: (dni, nombre, apellido) => {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO persona (dni, nombre, apellido) VALUES (?, ?, ?)',
        [dni, nombre, apellido],
        (err, results) => {
          if (err) reject(err);
          resolve(results);
        }
      );
    });
  },

};


module.exports = personaModel;
