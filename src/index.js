require("dotenv").config();
const express = require("express");
const knex = require("./conexao");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("servidor rodando " + port);
});
