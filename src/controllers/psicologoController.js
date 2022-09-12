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
    },
    async listarPsicologo(req, res){
        try {
            const listaPsicologos = await psicologo.findAll()
            res.json(listaPsicologos)
        } catch (error) {
            res.status(500).json("Erro ao listar psicologos")
            console.error('Não foi possivel listar')
            console.log('Não foi possivel listar psicologos')
        }
    },
    async deletarPsicologo(req,res){
        try {
            const {id_psicologo} = req.params;
            
            await psicologo.destroy({
                where:{id_psicologo},
            },
            res.status(201),
            res.json('Psicologo deletado com sucesso'));

        } catch (error) {
            console.log('Não foi possivel deletar psicologo');
            console.error(error);
            res.status(500);
        }
    },
    async atualizarPsicologo(req, res){
        try {
            const {id_psicologo} = req.params;
            const {nome,email,senha,descricao} = req.body;

            const psicologoAtualizado = await psicologo.update({
                nome,
                email,
                senha,
                descricao},
                {where:{id_psicologo}});
            res.json('Produto atualizado')
            res.status(201)
            
        } catch (error) {
            console.error(error);
            console.log('Não foi possivel atualizar as informações');
            res.status(500);
        }
    }
}

module.exports = psicologoController