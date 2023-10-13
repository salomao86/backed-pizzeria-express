const pagamento = require("../models/pagamento.model");

const findPagamentoService = () => {
  return pagamento.find();
};

const findPagamentoByIdService = (id) => {
  return pagamento.findById(id);
};

const createPagamentoService = async (body) => {
  return await pagamento.create(body);
};

const updatePagamentoService = async (id, body) => {
  const corpo = await pagamento.findByIdAndUpdate(id, body, { returnDocument: "after" });
  return corpo;
};

const deletePagamentoService = async (id) => {
  return pagamento.findByIdAndRemove(id);
};

const updatePagamentoStatusService = (id, statusPagamento) =>
  pagamento.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        status: statusPagamento,
      },
    },
    {
      includeResultMetadata: true,
    }
  );

module.exports = {
  findPagamentoService,
  findPagamentoByIdService,
  createPagamentoService,
  updatePagamentoService,
  deletePagamentoService,
  updatePagamentoStatusService
};


