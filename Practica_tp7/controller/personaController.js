const express = require('express');
const router = express.Router();
const personaModel = require('../model/persona');

// Listar todas las personas
router.get('/', async (req, res) => {
  try {
    const personas = await personaModel.getAll();
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las personas' });
  }
});

// Agregar una persona
router.post('/', async (req, res) => {
  const { dni, nombre, apellido } = req.body;
  try {
    const result = await personaModel.create(dni, nombre, apellido);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar la persona' });
  }
});

//  Para mas posibles rutas CRUD...
  
  // Actualizar una persona por DNI
  router.put('/:dni', async (req, res) => {
    const dni = req.params.dni;
    const { nombre, apellido } = req.body;
    try {
      const result = await personaModel.updateByDNI(dni, nombre, apellido);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la persona' });
    }
  });
  
  // Eliminar una persona por DNI
  router.delete('/:dni', async (req, res) => {
    const dni = req.params.dni;
    try {
      const result = await personaModel.deleteByDNI(dni);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la persona' });
    }
  });
  

module.exports = router;
