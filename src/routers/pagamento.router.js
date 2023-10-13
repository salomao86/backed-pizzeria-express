const router = require("express").Router();
const pagamentoController = require("../controllers/pagamento.controller");
const authValidator = require("../validators/auth.validator");
const pagamentoValidator = require('../validators/pagamento.validator');

router.get("/find/:id", authValidator, pagamentoController.findPagamentoByIdController);
router.get("/findAll", authValidator, pagamentoController.findAllPagamentoController);

router.post("/create", authValidator, pagamentoValidator.validationBodyRules, pagamentoValidator.checkRules, pagamentoController.createPagamentoController);
router.put("/update/:id", authValidator, pagamentoValidator.validationBodyRules, pagamentoValidator.checkRules, pagamentoController.updatePagamentoController);
router.put("/updateStatus/:id", authValidator, pagamentoValidator.validationStatusRules, pagamentoValidator.checkRules, pagamentoController.updatePagamentoController);

router.delete("/delete/:id", authValidator, pagamentoController.deletePagamentoController);

module.exports = router;