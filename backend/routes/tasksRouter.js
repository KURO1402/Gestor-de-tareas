const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, countTasks } = require('../controllers/tasksController');
const authMiddleware = require('../middlewares/authMiddleware');

//Ruta con autenticación
router.get('/tareas',authMiddleware, getTasks);
router.post('/nueva-tarea', authMiddleware, createTask);
router.put('/tareas/:id', authMiddleware, updateTask);
router.get('/clasificar', authMiddleware, countTasks);

module.exports = router;