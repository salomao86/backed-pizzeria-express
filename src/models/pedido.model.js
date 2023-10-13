const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const pedidoSchema = new mongoose.Schema({
  produtos: [
    {
      _id:{type: mongoose.Schema.Types.ObjectId,ref:'produtos', required: true},
      quantidade: { type: Number, required: true}
    },
  ],
  dataPedido: { type: Date, required: true, default: Date.now },
  precoTotal: { type: Number, required: true},
  frete: { type: Number },
  status:{type:String},
  usuarioId: {type: mongoose.Schema.Types.ObjectId,ref:'usuarios'}
});

pedidoSchema.pre("save", async function (next) {
  this.status = 'Em aberto';
  this.frete = this.precoTotal * 2;  
  next();
});

pedidoSchema.pre("findOneAndUpdate", async function (next) {
  if (this._update.frete) {
    this._update.frete = this._update.precoTotal * 2;
  }
  next();
});

const pedido = mongoose.model("Pedidos", pedidoSchema);

module.exports = pedido;