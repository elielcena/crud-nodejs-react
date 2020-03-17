const bcrypt = require('bcryptjs');

module.exports = {
    encriptarSenha(senha) {
        return bcrypt.hash(senha, 10);
    },

    validarSenha(senha, senha2) {
        return bcrypt.compare(senha, senha2);
    }
}