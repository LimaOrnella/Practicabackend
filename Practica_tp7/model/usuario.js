const db = require('../db'); // Configuración de la conexión a la base de datos

const usuarioModel = {
    getByEmail: (email) => {
        return new Promise((resolve, reject) => {
          db.query('SELECT * FROM usuario WHERE mail = ?', [email], (err, results) => {
            if (err) reject(err);
            resolve(results);
          });
        });
    }
};
module.exports = usuarioModel;
