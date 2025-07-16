const pool = require('../config/db');
const bcrypt = require('bcryptjs');

// Obtener usuarios (con limite de 20 usuarios)
const getUsersDB = async (page = 1, limit = 20) => {
  const offset = (page - 1) * limit;
  try {
    const [rows] = await pool.query(
      `SELECT 
        u.idUsuario, 
        u.nombres, 
        u.apellidos, 
        t.tipoUsuario, 
        u.correo 
      FROM usuarios u 
      INNER JOIN tipousuario t 
        ON u.idTipoUs = t.idTipoUs 
      LIMIT ? OFFSET ?`,
      [limit, offset]
    );  
    return rows;
  } catch (error) {
    console.error("Error en getUsersDB:", error.message);
    throw new Error("Error al obtener usuarios");
  }
};

// Crear usuario con contraseña hasheada
const createUserDB = async (userData) => {
  const { nombres, apellidos, correo, password } = userData;
  const tipoUsuario = 2;
  try {
    // Hash de contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [result] = await pool.query(
      "INSERT INTO usuarios (idTipoUs, nombres, apellidos, correo, clave) VALUES (?, ?, ?, ?, ?)",
      [tipoUsuario, nombres, apellidos, correo, hashedPassword]
    );
    const [tipoRows] = await pool.query(
      "SELECT tipoUsuario FROM tipousuario WHERE idTipoUs = ?",
    [tipoUsuario]
    );
    const tipo = tipoRows[0]?.tipoUsuario || 'Desconocido';

    return { id: result.insertId, nombres, apellidos, rol: tipo, correo };
  } catch (error) {
    console.error("Error al registrar usuario:", error.message);
    throw new Error("Error al crear usuario");
  }
};

// Autenticar usuario
const authenticateUserDB = async (correo, password) => {
  try {
    const [rows] = await pool.query(
      `SELECT u.idUsuario, u.nombres, u.apellidos, u.clave, t.tipoUsuario, u.correo
       FROM usuarios u
       INNER JOIN tipousuario t ON u.idTipoUs = t.idTipoUs
       WHERE u.correo = ? `,
      [correo]
    );
    
    if (rows.length === 0 || rows[0].estado !== 'activo') return null;
    
    const user = rows[0];
    const coincide= await bcrypt.compare(password, user.clave);//devuelve falso si no coincide
    
    return coincide ? {
      id: user.idUsuario,
      nombres: user.nombres,
      apellidos: user.apellidos,
      tipo: user.tipoUsuario,
      correo: user.correo
    } : null;
  } catch (error) {
    console.error("Error en authenticateUserDB:", error.message);
    throw new Error("Error de autenticación");
  }
};

//Asignar rol admin 
const assingAdminDB = async (idUser,rol) => {
  try {
    const [result] = await pool.query("UPDATE usuarios SET idTipoUs = ? WHERE idUsuario = ?",[rol, idUser]);

    if(result.affectedRows == 0){
      return {error: "Cambio de rol no completado"};

    }

    return {message: "Cambio de rol de usuario efectuado con exito"};

  } catch (error) {
    console.error("Error en assingAdmin:", error.message);
    throw new Error("Error al asignar rol");
  }
}

//Eliminar un usuario
const deleteUserDB = async (idUser) => {
  try {
    const [result] = await pool.query("DELETE FROM usuarios WHERE idUsuario = ?",[idUser]);
    if(result.affectedRows == 0){
      return {error: "No se elimino el usuario"};
    }

    return {message: "Usuario eliminado correctamente"};
  } catch (error) {
    console.error("Error en deleteUserDB:",error.message);
    throw new Error("Error al eliminar usuario")
  }
}

module.exports = {
  getUsersDB,
  createUserDB,
  authenticateUserDB,
  assingAdminDB,
  deleteUserDB
};