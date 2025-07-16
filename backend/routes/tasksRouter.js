const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask } = require('../controllers/tasksController');
const authMiddleware = require('../middlewares/authMiddleware');

//Ruta con autenticacion
router.get('/tareas',authMiddleware, getTasks);
router.post('/nueva-tarea', authMiddleware, createTask);
router.put('/tareas/:id', authMiddleware, updateTask);

module.exports = router;