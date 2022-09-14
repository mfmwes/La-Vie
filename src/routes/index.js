const express = require('express');
const pacientesController = require('../controllers/pacientesController');
const routes = express.Router();
const psicologoController = require('../controllers/psicologoController');


routes.post('/psicologo', psicologoController.cadastrarPsicologo);
routes.get('/psicologo', psicologoController.listarPsicologo);
routes.get('/psicologo/:id', psicologoController.getPsicologoById);
routes.delete('/psicologo/:id_psicologo/delete', psicologoController.deletarPsicologo);
routes.put('/psicologo/:id_psicologo/update', psicologoController.atualizarPsicologo);

routes.get('/paciente', pacientesController.listarPaciente);
routes.post('/paciente', pacientesController.cadastrarPaciente);
routes.put('/paciente/:id_paciente/update', pacientesController.atualizarPaciente);
routes.delete('/paciente/:id_paciente/delete', pacientesController.deletarPaciente);

module.exports = routes