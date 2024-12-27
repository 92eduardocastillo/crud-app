const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Rutas para la API de usuarios
router.post('/users', UserController.createUser); // Crear un nuevo usuario
router.get('/users', UserController.getUsers); // Obtener todos los usuarios
router.put('/users/:id', UserController.updateUser); // Actualizar un usuario existente
router.delete('/users/:id', UserController.deleteUser); // Eliminar un usuario

module.exports = router;