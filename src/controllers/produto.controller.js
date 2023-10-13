const produtoService = require('../services/produto.service');

const findAllProdutoController = async (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.description = 'Endpoint para listar todos os produtos.'
    /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
    try {
        res.send(await produtoService.findProdutoService());
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

const findProdutoByIdController = async (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.description = 'Endpoint para pesquisar um produto específico.'
    // #swagger.parameters['id'] = { description: 'ID do Produto' }

    try {
        const produto = await produtoService.findProdutoByIdService(req.params.id);

        if (!produto) {
            res.status(404).send({ message: "Produto não encontrado, tente novamente!" });
        } else {
            res.status(200).send(produto);
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

const createProdutoController = async (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.description = 'Endpoint para criar um produto.'
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
        res.send(await produtoService.createProdutoService(corpo));
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

const updateProdutoController = async (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.description = 'Endpoint para atualizar um produto.'
    // #swagger.parameters['id'] = { description: 'ID do Produto' }
    /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
    try {
        res.send(await produtoService.updateProdutoService(req.params.id, req.body));
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

const deleteProdutoController = async (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.description = 'Endpoint para excluir um produto.'
    // #swagger.parameters['id'] = { description: 'ID do Produto' }
    /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
    try {
        const del = await produtoService.deleteProdutoService(req.params.id);
        if(del != null ){
            res.status(200).send({ message: 'deletado com sucesso!' });
        } else {
            res.status(404).send({ message: 'Produto não encontrado para deletar' });
        }

    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

module.exports = {
    findAllProdutoController,
    findProdutoByIdController,
    createProdutoController,
    updateProdutoController,
    deleteProdutoController
}