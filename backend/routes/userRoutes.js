const express = require('express');
const router = express.Router();
const { getUsers, createUser, loginUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const verifyAdmin = require('../middlewares/verifyAdmin');

// Ruta publica
router.post('/login', loginUser);

// Ruta publica
router.post('/registro', createUser);

// Ruta protegida y solo para administardores
router.get('/usuarios', authMiddleware, verifyAdmin, getUsers);

module.exports = router;