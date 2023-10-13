const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const pagamentoSchema = new mongoose.Schema({
  pedidoId: {type: mongoose.Schema.Types.ObjectId,ref:'pedidos'},
  formaPagamento: { type: String, required: true },
  status:{type:String, required: true, default: "Pendente"},
  usuarioId: {type: mongoose.Schema.Types.ObjectId,ref:'usuarios'}
});

const pagamento = mongoose.model("Pagamentos", pagamentoSchema);

module.exports = pagamento;