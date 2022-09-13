const express = require('express');
const routes = express.Router();
const psicologoController = require('../controllers/psicologoController');


routes.post('/psicologo', psicologoController.cadastrarPsicologo);
routes.get('/psicologo', psicologoController.listarPsicologo);
routes.get('/psicologo/:id', psicologoController.getPsicologoById);
routes.delete('/psicologo/:id_psicologo/delete', psicologoController.deletarPsicologo);
routes.put('/psicologo/:id_psicologo/update', psicologoController.atualizarPsicologo);

module.exports = routes