const express = require('express');
const routes = require('./routes');
const db = require('./database');


const server = express();

db.hasConection();

server.use(express.json());

server.use(routes);

server.listen(3000, () => {console.log('Servidor rondando')});
 