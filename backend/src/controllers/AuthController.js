const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
const utils = require('../utils');
const message = require('../utils/message_PTBR');
const auth = require('../utils/auth');

function gerarToken(params = {}) {
    return jwt.sign(params, auth.secret, {
        expiresIn: 86400,
    });
}

module.exports = {
    async authenticate(req, res) {
        try {
            const { email, senha } = req.body;

            const usuario = await Usuario.findOne({ email }).select('+senha');

            if (!usuario && !await utils.validarSenha(senha, usuario.senha))
                return res.status(400).json({ error: message.usuarioInvalido });

            usuario.senha = undefined;

            return res.status(200).json({
                usuario,
                token: gerarToken({ id: usuario.id }),
            });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}