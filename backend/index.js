require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const tasksRoutes = require('./routes/tasksRouter');

//middlewares esenciales
app.use(express.json());
app.use(cors());


app.use('/api',userRoutes);
app.use('/api',tasksRoutes);

//Manejar errores generales del servidor
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

//Encender el servidor
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

