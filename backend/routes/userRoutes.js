const express = require('express');
const router = express.Router();
const { getUsers, createUser, loginUser, assingAdmin } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const verifyAdmin = require('../middlewares/verifyAdmin');

// Ruta publica
router.post('/login', loginUser);

// Ruta publica
router.post('/registro', createUser);

// Ruta protegida y solo para administardores
router.get('/usuarios', authMiddleware, verifyAdmin, getUsers);

// Ruta protegida y solo para administardores
router.post('/ascender', authMiddleware, verifyAdmin, assingAdmin);

module.exports = router;