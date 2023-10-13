const router = require("express").Router();
const pedidoController = require("../controllers/pedido.controller");
const authValidator = require("../validators/auth.validator");
const pedidoValidator = require('../validators/pedido.validator');

router.get("/find/:id", authValidator, pedidoController.findPedidoByIdController);
router.get("/findAll", authValidator, pedidoController.findAllPedidoController);

router.post("/create", authValidator, pedidoValidator.validationBodyRules, pedidoValidator.checkRules, pedidoController.createPedidoController);
router.put("/update/:id", authValidator, pedidoValidator.validationBodyRules, pedidoValidator.checkRules, pedidoController.updatePedidoController);
router.put("/updateStatus/:id", authValidator, pedidoValidator.validationStatusRules, pedidoValidator.checkRules, pedidoController.updatePedidoStatusController);

router.delete("/delete/:id", authValidator, pedidoController.deletePedidoController);

module.exports = router;