const { getTasksDB, createTaskDB } = require('../models/taskModel');

const getTasks = async(req, res) => {
    try {
        const {id} = req.user;
        const tasks = await getTasksDB(id);
        
        if(tasks.length === 0){
            return res.status(404).json({message: "No existen tareas de este usuario"});
        }

        res.json({
            tasks
        })
    } catch (error) {
        console.error("Error en getTasks:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

const createTask = async (req, res) => {
    try {
        if(!req.body.usuario || isNaN(parseFloat(req.body.usuario))  || !req.body.descripcion){
            return res.status(400).json({error: "Datos incompletos o invalidos"});
        }

        const newTask = await createTaskDB(req.body);

        res.status(201).json({
            message: "Tarea registrada correctamente",
            newTask
        })

    } catch (error) {
        console.error("Error en createtask:", error);
        res.status(500).json({ error: "Error al crear tarea" });
    }
}

module.exports = {
    getTasks,
    createTask
}