const express = require('express');
const router = express.Router();
const tareas = require('../controllers/tareasControllers');


router.get('/', tareas.obtenerTarea);
router.post('/', tareas.crearTarea);
router.put('/:id', tareas.actualizarTarea);
router.delete('/:id', tareas.eliminarTarea);

module.exports = router;