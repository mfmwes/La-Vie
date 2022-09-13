const db = require('../database')
const {DataTypes} = require('sequelize')

const pacientes = db.define('pacientes',{
    id_pacientes:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    senha:{
        type: DataTypes.INTEGER,
    },
    descricao: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
},
{
  tableName:'pacientes'  
})

module.exports = pacientes;