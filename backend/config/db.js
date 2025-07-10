const mysql = require('mysql2/promise');
require('dotenv').config({ path: __dirname + '/../.env' });

let conexion;

const conectDB = async () => {
    if (!conexion) {
        try {
        conexion = await mysql.createConnection({
            host:process.env.DB_HOST,
            user:process.env.DB_USER,
            password:process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        console.log('Conexión a MySQL exitosa');
        } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
        process.exit(1); 
        }
    }

    return conexion;
}

conectDB();


module.exports = conectDB;
