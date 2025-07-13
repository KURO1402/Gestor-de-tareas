const { getTasksDB } = require('../models/taskModel');

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

module.exports = {
    getTasks
}