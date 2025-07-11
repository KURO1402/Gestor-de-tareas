const db = require('...')

//obtener tareas
exports.obtenerTarea = async(req,res) => {
    try{
        const[tareas] = await db.query('SELECT*FROM');
        req.json(tareas);
    } catch(error){
        res.status(500).send(error);
    }
};

//crear tareas
exports.crearTarea = async (req,res) => {
    try{
        const{titulo, descripcion} = req.body;
        const[resultado] = await db.query(
            'INSERT INTO tareas (...., ....) VALUES (?, ?)',
            [titulo, descripcion]
        );
        res.status(201).json({ id: resultado.insertID });  
    } catch (error) {
        res.status(500).send(error);
    }
};