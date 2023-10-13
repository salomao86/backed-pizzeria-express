# backed-pizzeria-express
Projeto Express CRUD completo de uma pizzaria

## Conteúdo

- [Sobre](#about)
- [Começando](#getting_started)
- [Autor](#author)

## Sobre <a name = "about"></a>

Este projeto tem como objetivo servir de avalidação para a matéria Backend Development do curso de MBA em Desenvolvimento Full Stack da Faculdade Unyleya.

Foram desenvolvidos endpoints com as funcionalidades:

- CRUD de pedidos
- CRUD de usuários (clientes e funcionários)
- CRUD de pagamentos
- CRUD de produtos
- Login com JWT


## Começando <a name = "getting_started"></a>

Até o presente momento toda aplicação foi desenvolvida em NodeJs com banco de dados MongoDB e  documentação com Swagger.

### Pré-requisitos

Para executar a aplicação na máquina local é necessário ter instalado:

- VSCode (https://code.visualstudio.com/)
- Plugin do Thunder Client no VSCode (https://www.thunderclient.com)
- NodeJs (https://nodejs.org/en)
- MongoDB (https://www.mongodb.com/try/download/community)

### Instalação

Fazer o download da aplicação no endereço https://github.com/salomao86/backend-pizzeria-express do GitHub.

Após isso executar na console do bash

```bash
$ npm install
```

### Execução

Na console do bash executar:

```bash
# production
$ npm start
```

```bash
# development
$ npm run dev
```

```bash
# para atualizar o swagger da aplicação
$ npm swagger-autogen
```

No arquivo thunder-collection_pizzeria-express.json existe um exemplo de cada endpoint da aplicação e no thunder-environment_local.json as variáveis do Thunder Client.

### Link para acessar swagger da aplicação
http://localhost:3000/doc/


## Autor <a name = "author"></a>

Humberto Quintino Salomão <br>
humbertoqs@gmail.com <br>
Github:salomao86