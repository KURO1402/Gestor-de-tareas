const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: "Acceso no autorizado" });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: decoded.id,
      correo: decoded.correo
    };
    next();
  } catch (error) {
    console.error("Error en authMiddleware:", error);
    res.status(401).json({ error: "Token inválido o expirado" });
  }
};

module.exports = authMiddleware;