const pedidoService = require('../services/pedido.service');

const findAllPedidoController = async (req, res) => {
  // #swagger.tags = ['Pedido']
  // #swagger.description = 'Endpoint para listar todos os pedidos.'
  /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */  
  try{
    res.send(await pedidoService.findPedidoService());
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const findPedidoByIdController = async (req, res) => {
  // #swagger.tags = ['Pedido']
  // #swagger.description = 'Endpoint para pesquisar um pedido específico.'
  // #swagger.parameters['id'] = { description: 'ID do Pedido' }
  /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
  try{
    res.send(await pedidoService.findPedidoByIdService(req.params.id));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const createPedidoController = async (req, res) => {
  // #swagger.tags = ['Pedido']
  // #swagger.description = 'Endpoint para criar um pedido.'
  /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
  try{
    const corpo = {
      ...req.body,
      userId: req.userId,
      createdAt: new Date(),
    }
    res.send(await pedidoService.createPedidoService(corpo));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const updatePedidoController = async (req, res) => {
  // #swagger.tags = ['Pedido']
  // #swagger.description = 'Endpoint para atualizar um pedido.'
  // #swagger.parameters['id'] = { description: 'ID do Pedido' }
  /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
  try{
    res.send(await pedidoService.updatePedidoService(req.params.id, req.body));
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const deletePedidoController = async (req, res) => {
  // #swagger.tags = ['Pedido']
  // #swagger.description = 'Endpoint para excluir um pedido.'
  // #swagger.parameters['id'] = { description: 'ID do Pedido' }
  /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
  try{
    const del = await pedidoService.deletePedidoService(req.params.id);

    if(del != null ){
      res.status(200).send({ message: 'deletado com sucesso!' });
    }else{
      res.status(404).send({ message: 'Pedido não encontrado para deletar' });
    }
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
};

const updatePedidoStatusController = async (req,res) =>{
  // #swagger.tags = ['Pedido']
  // #swagger.description = 'Endpoint para atualizar o status de um pedido.'
  // #swagger.parameters['id'] = { description: 'ID do Pedido' }
  /* #swagger.parameters['authorization'] = {
         in: 'header',
               description: 'Token de autenticação do usuário logado.',
               type: 'string'
        } */
  try{
    const pedido = await pedidoService.updatePedidoStatusService(req.params.id,req.body.status);

    if(pedido.ok == 1){
      res.status(200).send({ message: 'status do pedido atualizado com sucesso' });  
    }else{
      res.status(400).send({ message: 'algo deu errado, tente novamente' });  
    }
   
  } catch (err) {
    res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
    console.log(err.message);
  }
}

module.exports = {
    findAllPedidoController,
    findPedidoByIdController,
    createPedidoController,
    updatePedidoController,
    deletePedidoController,
    updatePedidoStatusController
};