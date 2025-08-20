const express = require('express');
const router = express.Router();
const { getUsers, 
    createUser, 
    loginUser, 
    assingAdmin, 
    deleteUser
} = require('../controllers/userController');
const verifyAdmin = require('../middlewares/verifyAdmin');

// Ruta publica
router.post('/login', loginUser);

// Ruta publica
router.post('/registro', createUser);

// Ruta para ver usuarios
router.get('/usuarios/:id', verifyAdmin, getUsers);

// Ruta para cambiar rol de administrador a un usuario
router.post('/ascender', verifyAdmin, assingAdmin);

//Ruta para eliminar usario
router.post('/usuarios/eliminar',verifyAdmin, deleteUser);

module.exports = router;