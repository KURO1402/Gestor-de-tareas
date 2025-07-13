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

module.exports = { 
    getTasksDB
}