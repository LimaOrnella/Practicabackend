const express = require('express');
const router = express.Router();
const usuarioModel = require('../model/usuario');

// Definir rutas y controladores igual personaController.js

// Agregar un usuario
router.post('/', async (req, res) => {
    const { mail, nickname, password } = req.body;
    try {
      const result = await usuarioModel.create(mail, nickname, password);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar el usuario' });
    }
  });
  
  // Obtener todos los usuarios
  router.get('/', async (req, res) => {
    try {
      const usuarios = await usuarioModel.getAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  });
  
  // Actualizar un usuario por email
  router.put('/:email', async (req, res) => {
    const email = req.params.email;
    const { nickname, password } = req.body;
    try {
      const result = await usuarioModel.updateByEmail(email, nickname, password);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  });
  
  // Eliminar un usuario por email
  router.delete('/:email', async (req, res) => {
    const email = req.params.email;
    try {
      const result = await usuarioModel.deleteByEmail(email);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  });
  
module.exports = router;
