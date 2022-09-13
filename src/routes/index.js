const express = require('express');
const pacientesController = require('../controllers/psicologoController');
const routes = express.Router();
const psicologoController = require('../controllers/psicologoController');


routes.post('/psicologo', psicologoController.cadastrarPsicologo);
routes.get('/psicologo', psicologoController.listarPsicologo);
routes.delete('/psicologo/:id_psicologo/delete', psicologoController.deletarPsicologo);
routes.put('/psicologo/:id_psicologo/update', psicologoController.atualizarPsicologo);

routes.get('/pacientes', pacientesController.listarPacientes);
routes.post('/pacientes', pacientesController.cadastrarPacientes);
routes.put('/pacientes/id:pacientes/update', pacientesController.atualizarPacientes);
routes.delete('/pacientes/id:pacientes/delete', pacientesController.deletarPacientes);

module.exports = routes