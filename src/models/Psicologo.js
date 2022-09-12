const db = require('../database')
const {DataTypes} = require('sequelize')

const Psicologo = db.define('Psicologo',{
    id_psicologo:{
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
        type: DataTypes.STRING,
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
  tableName:'psicologo'  
})

module.exports = Psicologo;