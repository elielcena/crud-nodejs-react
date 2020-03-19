const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

// ROTAS
const loginRouter = require('./routes/login');
const usuarioRouter = require('./routes/usuario');
const produtoRouter = require('./routes/produto');

// PORTA DO SEVIDOR
const PORT = 8282;
const HOST = '0.0.0.0';

const app = express();

// CONEXAO COM BANCO MONGO
mongoose.connect('mongodb://mongo/base', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("CONECTADO"));

app.use(cors());
app.use(express.json());

app.use(loginRouter);
app.use(usuarioRouter);
app.use(produtoRouter);

app.listen(PORT, HOST);