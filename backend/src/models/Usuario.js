const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    senha: {
        type: String,
        required: true,
        select: false,
    },
});

module.exports = mongoose.model('Usuario', UsuarioSchema);