require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getUsers = require('./routes/userRouter')

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

app.use('/api',getUsers);

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})

