const express = require('express');
const routes = express.Router();
const psicologoController = require('../controllers/psicologoController');


routes.post('/psicologo', psicologoController.cadastrarPsicologo);


module.exports = routes