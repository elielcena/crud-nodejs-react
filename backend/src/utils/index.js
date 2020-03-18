const bcrypt = require('bcryptjs');
const auth = require('../utils/auth');
const jwt = require('jsonwebtoken');

module.exports = {
    encriptarSenha(senha) {
        return bcrypt.hash(senha, 10);
    },

    validarSenha(senha, senha2) {
        return bcrypt.compare(senha, senha2);
    },

    gerarToken(params = {}) {
        return jwt.sign(params, auth.secret, {
            expiresIn: 86400,
        });
    }
}