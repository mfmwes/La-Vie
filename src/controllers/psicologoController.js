const psicologo = require('../models/Psicologo');


const psicologoController = {
    async cadastrarPsicologo(req, res){

        try{
        const { nome, email, senha, descricao } = req.body;
        
        const novoPsicologo = await psicologo.create({
            nome,
            email,
            senha,
            descricao
        });
        res.json(novoPsicologo);
        res.status(201).json("Psicologo cadastrado!");
    
        } catch(error){
            console.log("Erro ao cadastrar psicólogo")
            console.error(error)
            return res.status(500).json("Erro ao cadastrar psicólogo")
        }
    
    }
}

module.exports = psicologoController