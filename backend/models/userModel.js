const pool = require('../config/db');

const getUsersDB = async () => {
    try {
        const [rows] = await pool.query("SELECT nombres, apellidos, correo FROM usuarios");
        if(rows.length === 0){
            return [{error: "No existen usuarios registrados"}];
        }
        return rows;
    } catch (error) {
        console.log("Ocurrio un error al obtener los usuarios:", error.message);
        return []; 
    }
};

module.exports = getUsersDB;