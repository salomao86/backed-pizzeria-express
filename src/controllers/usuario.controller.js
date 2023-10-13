const usuarioService = require('../services/usuario.service');

const findAllUsuarioController = async (req, res) => {
    // #swagger.tags = ['Usuario']
    // #swagger.description = 'Endpoint para listar todos os usuarios.'
    /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
    try {
        res.send(await usuarioService.findUsuarioService());
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

const findUsuarioByIdController = async (req, res) => {
    // #swagger.tags = ['Usuario']
    // #swagger.description = 'Endpoint para pesquisar um usuario específico.'
    // #swagger.parameters['id'] = { description: 'ID do Usuario' }
    /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
    try {
        const usuario = await usuarioService.findUsuarioByIdService(req.params.id);

        if (!usuario) {
            res.status(404).send({ message: "Usuário não encontrado, tente novamente!" });
        } else {
            res.status(200).send(usuario);
        }

    } catch (err) {
        if (err) {
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: "ID informado está errado, tente novamente" });
        }
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

const createUsuarioController = async (req, res) => {
    // #swagger.tags = ['Usuario']
    // #swagger.description = 'Endpoint para criar um usuario.'
    /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
    try {
        const corpo = {
            ...req.body,
            createdAt: new Date(),
        }
        res.send(await usuarioService.createUsuarioService(corpo));
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

const updateUsuarioController = async (req, res) => {
    // #swagger.tags = ['Usuario']
    // #swagger.description = 'Endpoint para atualizar um usuario.'
    // #swagger.parameters['id'] = { description: 'ID do Usuario' }
    /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */

    try {
        res.send(await usuarioService.updateUsuarioService(req.params.id, req.body));
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

const deleteUsuarioController = async (req, res) => {
    // #swagger.tags = ['Usuario']
    // #swagger.description = 'Endpoint para excluir um usuario.'
    // #swagger.parameters['id'] = { description: 'ID do Usuario' }
    /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
    try {
        const del = await usuarioService.deleteUsuarioService(req.params.id);
        if(del != null ){
            res.status(200).send({ message: 'deletado com sucesso!' });
        } else {
            res.status(404).send({ message: 'Usuario não encontrado para deletar' });
        }

    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

module.exports = {
    findAllUsuarioController,
    findUsuarioByIdController,
    createUsuarioController,
    updateUsuarioController,
    deleteUsuarioController
}