const getUsers = require('../controllers/userController')

const express = require('express');
const router = express.Router();

router.get('/usuarios', getUsers);

module.exports = router;