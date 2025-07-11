const express = require('express');
const router = express.Router();
const { getUsers, createUser, loginUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta publica
router.post('/login', loginUser);

// Ruta publica
router.post('/usuarios', createUser);

// Ruta protegida
router.use(authMiddleware);
router.get('/usuarios', getUsers);

module.exports = router;