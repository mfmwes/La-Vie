const db = require('../database')
const {DataTypes} = require('sequelize')

const Paciente = db.define('paciente',{
    id_paciente:{
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
    idade:{
        type: DataTypes.INTEGER,
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
},
{
  tableName:'paciente'  
})

module.exports = Paciente;