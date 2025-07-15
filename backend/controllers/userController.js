const {
  getUsersDB,
  createUserDB,
  authenticateUserDB,
  assingAdminDB
} = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Obtener lista de usuarios
const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    
    const usuarios = await getUsersDB(page, limit);
    
    if (usuarios.length === 0) {
      return res.status(404).json({ message: "No se encontraron usuarios" });
    }
    
    res.json({
      page,
      limit,
      data: usuarios
    });
  } catch (error) {
    console.error("Error en getUsers:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Crear nuevo usuario
const createUser = async (req, res) => {
  try {
    // Validación algo basica
    if (!req.body.nombres || !req.body.correo || !req.body.password) {
      return res.status(400).json({ error: "Datos incompletos" });
    }
    
    const newUser = await createUserDB(req.body);

    //Crear token JWT
    const token = jwt.sign(
      { id: newUser.id,  
        nombres: newUser.nombres, 
        apellidos: newUser.apellidos,
        correo: newUser.correo, 
        rol: newUser.rol 
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(201).json({
      message: "Registro exitoso",
      token,
      newUser
    });
  } catch (error) {
    console.error("Error en createUser:", error);
    
    // Validar si ya hay un mismo correo ya registrado
    if (error.message.includes("ER_DUP_ENTRY")) {
      return res.status(409).json({ error: "El correo ya está registrado" });
    }
    
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

// Iniciar sesion
const loginUser = async (req, res) => {
  try {
    const { correo, password } = req.body;
    
    if (!correo || !password) {
      return res.status(400).json({ error: "Credenciales incompletas" });
    }
    
    const user = await authenticateUserDB(correo, password);
    
    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }
    
    // Crear token JWT
    const token = jwt.sign(
      { id: user.id, 
        nombres: user.nombres, 
        apellidos: user.apellidos, 
        correo: user.correo, 
        rol: user.tipo 
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );
    
    res.json({
      message: "Autenticación exitosa",
      token,
      user: {
        id: user.id,
        nombres: user.nombres,
        apellidos: user.apellidos,
        correo: user.correo,
        rol: user.tipo,
      }
    });
  } catch (error) {
    console.error("Error en loginUser:", error);
    res.status(500).json({ error: "Error de autenticación" });
  }
};

//asignar rol administrador
const assingAdmin = async(req, res) => {
  try {
    const {idUser, idRol} = req.body;
    
    if(!idUser || isNaN(idUser) || !idRol || isNaN(idRol)){
      return res.status(400).json({error: "Falta datos necesarios"});
    }
    const rpta = await assingAdminDB(idUser, idRol);

    res.json(rpta);
    
  } catch (error) {
    console.error("Error en assingAdmin:", error);
    res.status(500).json({ error: "Error de actualizacion de usuario" });
  }
}

module.exports = {
  getUsers,
  createUser,
  loginUser,
  assingAdmin
};