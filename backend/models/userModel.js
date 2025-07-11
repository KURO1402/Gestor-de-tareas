const pool = require('../config/db');
const bcrypt = require('bcryptjs');

// Obtener usuarios (con limite de 20 usuarios)
const getUsersDB = async (page = 1, limit = 20) => {
  const offset = (page - 1) * limit;
  try {
    const [rows] = await pool.query(
      "SELECT u.idUsuario, u.nombres, u.apellidos, t.tipoUsuario, u.correo FROM usuarios u INNER JOIN tipousuario t ON u.idTipoUs = t.idTipoUs LIMIT ? OFFSET ?",
      [limit, offset]
    );
    console.log(rows)
    return rows;
  } catch (error) {
    console.error("Error en getUsersDB:", error.message);
    throw new Error("Error al obtener usuarios");
  }
};

getUsersDB();
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
       WHERE u.correo = ?`,
      [correo]
    );
    
    if (rows.length === 0) return null;
    
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

module.exports = {
  getUsersDB,
  createUserDB,
  authenticateUserDB
};