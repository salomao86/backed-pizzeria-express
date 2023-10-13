require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

const port = process.env.PORT || 3000;
const app = express();
const connectToDatabase = require("./database/database");

const auth = require("./routers/auth.router");
const usuario = require("./routers/usuario.router");
const produto = require("./routers/produto.router");
const pedido = require("./routers/pedido.router");
const pagamento = require("./routers/pagamento.router");

app.use(express.json());
app.use(cors());
connectToDatabase();

app.use("/auth", auth);
app.use("/usuario", usuario);
app.use("/produto", produto);
app.use("/pedido", pedido);
app.use("/pagamento", pagamento);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (req, res) => {
    // #swagger.tags = ['Outros']
    // #swagger.description = 'Endpoint para efetuar teste de conexão.'
    res.send("hello hello");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});