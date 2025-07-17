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

//Actualizar estado de tarea
const updateTaskDB = async (idTarea, nuevoEstado, idUsuario)=>{
    try{
        const [tarea] = await pool.query(
            "SELECT idTarea FROM tareas WHERE idTarea = ? AND idUsuario = ?",
        [idTarea, idUsuario]
        );
        if(tarea.length==0){
            throw new Error("Tarea no encontrada");
        }
        await pool.query(
            "UPDATE tareas SET estado = ? WHERE idTarea = ?",
            [nuevoEstado, idTarea]
        );
        return{id: idTarea, nuevoEstado};
    } catch(error){
        console.error("Error al actualizar la tarea:", error.message);
        throw error;
    }
};

//Clasificar nuemero de tareas por estado
const countTasksDB = async ( idUser ) => {
  try {
    const [rows] = await pool.query("SELECT estado, COUNT(*) AS totalTareas FROM tareas WHERE idUsuario = ? GROUP BY estado ", [idUser]);
    return rows;
  } catch (error) {
    console.error("Error en countTasksDB:",error.message);
    throw new Error("Error al clasificar tareas");
  }
}

module.exports = { 
    getTasksDB,
    createTaskDB,
    updateTaskDB,
    countTasksDB
}