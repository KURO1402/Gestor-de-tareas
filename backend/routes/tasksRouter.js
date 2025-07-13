const express = require('express');
const router = express.Router();
const { getTasks } = require('../controllers/tasksController');
const authMiddleware = require('../middlewares/authMiddleware');

//Ruta con autenticacion
router.get('/tareas',authMiddleware, getTasks);

module.exports = router;