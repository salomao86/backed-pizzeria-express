const usuario = require("../models/usuario.model");

const findUsuarioService = () => {
  return usuario.find();
};

const findUsuarioByIdService = (id) => {
  return usuario.findById(id);
};

const createUsuarioService = async (body) => {
  return await usuario.create(body);
};

const updateUsuarioService = async (id, body) => {
  const corpo =  await usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
  return corpo;
};

const deleteUsuarioService = async (id) => {
  return usuario.findByIdAndRemove(id);
};

module.exports = {
  findUsuarioService,
  findUsuarioByIdService,
  createUsuarioService,
  updateUsuarioService,
  deleteUsuarioService
};
