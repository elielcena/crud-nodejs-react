const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
    },
    valor: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Produto', ProdutoSchema);