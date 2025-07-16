const pool = require('../config/db');

//Obtener las tareas filtrando por estado
const getTasksDB = async(idUser) => {
    try {
        const [rows] = await pool.query("SELECT idTarea, descripcion, estado FROM tareas WHERE idUsuario = ?", [idUser]);
        return rows;
    } catch (error) {
        console.error("Error en getTaskDB:", error.message);
        throw new Error("Error al obtener tareas");
    }
}

//Crear una nueva tarea
const createTaskDB = async(taskData) => {
    const {usuario, descripcion} = taskData;
    const estado = "pendiente";
    try {
        const [result] = await pool.query("INSERT INTO tareas(idUsuario, descripcion, estado) VALUES (?, ?, ?)",[usuario, descripcion, estado]);
        
        return {
            id: result.insertId,
            descripcion,
            estado
        };

    } catch (error) {
        console.error("Error al registrar la tarea:", error.message);
        throw new Error("Error al insertar la tarea");
    }
}

module.exports = { 
    getTasksDB,
    createTaskDB
}