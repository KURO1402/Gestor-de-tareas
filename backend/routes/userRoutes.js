const express = require('express');
const router = express.Router();
const { getUsers, 
    createUser, 
    loginUser, 
    assingAdmin, 
    deleteUser
} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const verifyAdmin = require('../middlewares/verifyAdmin');

// Ruta publica
router.post('/login', loginUser);

// Ruta publica
router.post('/registro', createUser);

// Ruta para ver usuarios
router.get('/usuarios', authMiddleware, verifyAdmin, getUsers);

// Ruta para cambiar rol de administrador a un usuario
router.post('/ascender', authMiddleware, verifyAdmin, assingAdmin);

//Ruta para eliminar usario
router.post('/eliminar', authMiddleware, verifyAdmin, deleteUser);

module.exports = router;