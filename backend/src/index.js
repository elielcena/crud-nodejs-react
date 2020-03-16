const express = require('express');
const mongoose = require('mongoose');

// ROTAS
const produtoRouter = require('./routes/produto');
const usuarioRouter = require('./routes/usuario');

// PORTA DO SEVIDOR
const PORT = 8282;

const app = express();

// CONEXAO COM BANCO MONGO
mongoose.connect('mongodb://mongo:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(produtoRouter);
app.use(usuarioRouter);

app.listen(PORT);