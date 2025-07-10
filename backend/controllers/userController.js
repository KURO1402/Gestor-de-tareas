const getUsersDB = require('../models/userModel');

const getUsers = async (req, res) =>{
    try {
        const usuarios = await getUsersDB();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({error: error.message})
    };
};

module.exports = getUsers;