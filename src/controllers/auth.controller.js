const authService = require("../services/auth.service");
const bcrypt = require("bcrypt");
require("dotenv").config();

const loginController = async (req, res) => {
    // #swagger.tags = ['Login']
    // #swagger.description = 'Endpoint para efetuar login e gerar o token.'
    /* #swagger.parameters['body'] = {
         in: 'body',
               description: 'Informações de login.',
               schema: { $ref: "#/definitions/ReqLogin" }
        } */
  
    const { email, senha } = req.body;

    const user = await authService.loginService(email);

    if (!user) {
      return res.status(400).send({ message: "Usuário não encontrado!" });
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);

    if (!isPasswordValid) {
      return res.status(400).send({ message: "Senha inválida!" });
    }

    const token = authService.generateToken(user.id);
    
    res.send({
      email,
      token});
  };

  module.exports = { loginController };