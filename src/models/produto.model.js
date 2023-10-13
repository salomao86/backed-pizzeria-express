const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const productSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sabor: { type: String, required: true },
  ingredientes: { type: String, required: true },
  valorUnitario: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: new Date() },
});

const product = mongoose.model("Produtos", productSchema);

module.exports = product;