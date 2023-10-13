const router = require("express").Router();
const produtoController = require("../controllers/produto.controller");
const authValidator = require("../validators/auth.validator");
const produtoValidator = require('../validators/produto.validator');

router.get("/find/:id", authValidator, produtoController.findProdutoByIdController);
router.get("/findAll", authValidator, produtoController.findAllProdutoController);

router.post("/create", authValidator, produtoValidator.validationBodyRules, produtoValidator.checkRules, produtoController.createProdutoController);
router.put("/update/:id", authValidator, produtoValidator.validationBodyRules, produtoValidator.checkRules, produtoController.updateProdutoController);
router.delete("/delete/:id", authValidator, produtoController.deleteProdutoController);

module.exports = router;