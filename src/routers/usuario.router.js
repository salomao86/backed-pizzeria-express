const router = require("express").Router();
const usuarioController = require("../controllers/usuario.controller");
const authValidator = require("../validators/auth.validator");
const usuarioValidator = require('../validators/usuario.validator');

router.get("/find/:id", authValidator, usuarioController.findUsuarioByIdController);
router.get("/findAll", authValidator, usuarioController.findAllUsuarioController);

router.post("/create", authValidator, usuarioValidator.validationBodyRules, usuarioValidator.checkRules, usuarioController.createUsuarioController);
router.put("/update/:id", authValidator, usuarioValidator.validationBodyRules, usuarioValidator.checkRules, usuarioController.updateUsuarioController);
router.delete("/delete/:id", authValidator, usuarioController.deleteUsuarioController);

module.exports = router;