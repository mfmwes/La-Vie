const Sequelize = require('sequelize');

const DB_NAME = 'lavie';
const DB_USER = 'root';
const DB_PASS = 'mysql';
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
};

let db = {}; // Objeto para guardar a conexão do Banco de Dados

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
}
 catch (error) {
    console.error('Erro ao se conectar com o banco de dados');
};

//função pra testar conexão com o banco de dados
async function hasConection (){
    try {
        await db.authenticate();
        console.log("Banco de dados conectado")
    } catch (error) {
        console.error('Erro ao tentar se conectar com o banco de dados')
    }
};

// atribuindo função ao objeto db 
Object.assign(db, {hasConection});

module.exports = db;
