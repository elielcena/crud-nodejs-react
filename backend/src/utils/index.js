const bcrypt = require('bcryptjs');

module.exports = {
    encriptarSenha(senha) {
        console.log(bcrypt.hash(senha, 10));
        return bcrypt.hash(senha, 10);
    }
}