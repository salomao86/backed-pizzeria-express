const pedido = require("../models/pedido.model");

const findPedidoService = () => {
  return pedido.find();
};

const findPedidoByIdService = (id) => {
  return pedido.findById(id);
};

const createPedidoService = async (body) => {
  return await pedido.create(body);
};

const updatePedidoService = async (id, body) => {
  const corpo = await pedido.findByIdAndUpdate(id, body, { returnDocument: "after" });
  return corpo;
};

const deletePedidoService = async (id) => {
  return pedido.findByIdAndRemove(id);
};

const updatePedidoStatusService = (id, statusPedido) =>
  pedido.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        status: statusPedido
      },
    },
    {
      includeResultMetadata: true,
    }
  );

module.exports = {
  findPedidoService,
  findPedidoByIdService,
  createPedidoService,
  updatePedidoService,
  deletePedidoService,
  updatePedidoStatusService
};


