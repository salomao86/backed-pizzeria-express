const pagamentoService = require('../services/pagamento.service');

const findAllPagamentoController = async (req, res) => {
  // #swagger.tags = ['Pagamento']
  // #swagger.description = 'Endpoint para listar todos os pagamentos.'
  /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
  try {
    res.send(await pagamentoService.findPagamentoService());
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
    console.log(err.message);
  }
};

const findPagamentoByIdController = async (req, res) => {
  // #swagger.tags = ['Pagamento']
  // #swagger.description = 'Endpoint para pesquisar um pagamento específico.'
  // #swagger.parameters['id'] = { description: 'ID do Pagamento' }
  /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
  try {
    res.send(await pagamentoService.findPagamentoByIdService(req.params.id));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
    console.log(err.message);
  }
};

const createPagamentoController = async (req, res) => {
  // #swagger.tags = ['Pagamento']
  // #swagger.description = 'Endpoint para criar um pagamento.'
  /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
  /* #swagger.parameters['body'] = {
         in: 'body',
               description: 'Informações de pagamento.'
        } */
  try {
    const corpo = {
      ...req.body,
      userId: req.userId,
      createdAt: new Date(),
    }
    res.send(await pagamentoService.createPagamentoService(corpo));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
    console.log(err.message);
  }
};

const updatePagamentoController = async (req, res) => {
  // #swagger.tags = ['Pagamento']
  // #swagger.description = 'Endpoint para atualizar um pagamento.'
  // #swagger.parameters['id'] = { description: 'ID do Pagamento' }
  /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
  try {
    res.send(await pagamentoService.updatePagamentoService(req.params.id, req.body));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
    console.log(err.message);
  }
};

const deletePagamentoController = async (req, res) => {
  // #swagger.tags = ['Pagamento']
  // #swagger.description = 'Endpoint para excluir um pagamento.'
  // #swagger.parameters['id'] = { description: 'ID do Pagamento' }
  /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
  try {
    const del = await pagamentoService.deletePagamentoService(req.params.id);

    if (del != null) {
      res.status(200).send({ message: 'deletado com sucesso!' });
    } else {
      res.status(404).send({ message: 'Pagamento não encontrado para deletar' });
    }
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
    console.log(err.message);
  }
};

const updatePagamentoStatusController = async (req, res) => {
  // #swagger.tags = ['Pagamento']
  // #swagger.description = 'Endpoint para atualizar o status de um pagamento.'
  // #swagger.parameters['id'] = { description: 'ID do Pagamento' }
  try {
    const pagamento = await pagamentoService.updatePagamentoStatusService(req.params.id, req.body.status);

    if (pagamento.ok == 1) {
      res.status(200).send({ message: 'status do pagamento atualizado com sucesso' });
    } else {
      res.status(400).send({ message: 'algo deu errado, tente novamente' });
    }

  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
    console.log(err.message);
  }
}

module.exports = {
  findAllPagamentoController,
  findPagamentoByIdController,
  createPagamentoController,
  updatePagamentoController,
  deletePagamentoController,
  updatePagamentoStatusController
};