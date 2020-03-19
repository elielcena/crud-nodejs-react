const Usuario = require('../models/Usuario');
const utils = require('../utils');
const message = require('../utils/message_PTBR');

module.exports = {
    async authenticate(req, res) {
        try {
            const { email, senha } = req.body;
            const usuario = await Usuario.findOne({ email }).select('+senha');

            if (!usuario)
                return res.status(400).json({ error: message.usuarioInvalido });

            if (!await utils.validarSenha(senha, usuario.senha))
                return res.status(400).json({ error: message.usuarioInvalido });

            usuario.senha = undefined;

            return res.status(200).json({
                usuario,
                token: utils.gerarToken({ id: usuario.id }),
            });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}