const express = require('express');
const router = express.Router();
const { getTasks, createTask } = require('../controllers/tasksController');
const authMiddleware = require('../middlewares/authMiddleware');

//Ruta con autenticacion
router.get('/tareas',authMiddleware, getTasks);
router.post('/nueva-tarea', authMiddleware, createTask);

module.exports = router;