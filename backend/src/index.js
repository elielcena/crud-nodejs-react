const express = require('express');
const mongoose = require('mongoose');

// ROTAS
const loginRouter = require('./routes/login');
const usuarioRouter = require('./routes/usuario');
const produtoRouter = require('./routes/produto');

// PORTA DO SEVIDOR
const PORT = 8282;

const app = express();

// CONEXAO COM BANCO MONGO
mongoose.connect('mongodb://mongo:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(loginRouter);
app.use(usuarioRouter);
app.use(produtoRouter);

app.listen(PORT);