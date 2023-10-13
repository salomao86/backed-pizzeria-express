const produto = require("../models/produto.model");

const findProdutoService = () => {
  return produto.find();
};

const findProdutoByIdService = (id) => {
  return produto.findById(id);
};

const createProdutoService = async (body) => {
  return await produto.create(body);
};

const updateProdutoService = async (id, body) => {
  const corpo =  await produto.findByIdAndUpdate(id, body, { returnDocument: "after" });
  return corpo;
};

const deleteProdutoService = async (id) => {
  return produto.findByIdAndRemove(id);
};

module.exports = {
  findProdutoService,
  findProdutoByIdService,
  createProdutoService,
  updateProdutoService,
  deleteProdutoService
};
