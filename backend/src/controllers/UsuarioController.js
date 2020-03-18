const Usuario = require('../models/Usuario');
const utils = require('../utils');
const message = require('../utils/message_PTBR');

module.exports = {
    async index(req, res) {
        try {
            const usuario = await Usuario.find();

            return res.status(200).json(usuario);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async show(req, res) {
        try {
            const usuario = await Usuario.findById(req.params.id);

            return res.status(200).json(usuario);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async store(req, res) {
        try {
            let usuario = req.body;
            const { email } = req.body;
            if (await Usuario.findOne({ email }))
                return res.status(400).json({ error: message.usuarioExistente });

            usuario.senha = await utils.encriptarSenha(usuario.senha);
            await Usuario.create(usuario);

            return res.status(200).json({
                message: message.salvoComSucesso,
                token: utils.gerarToken({ id: usuario.id }),
            });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const usuario = req.body;
            usuario.senha = await utils.encriptarSenha(usuario.senha);
            await Usuario.findByIdAndUpdate(req.params.id, usuario, { new: true });

            return res.status(200).json({ message: message.atualizadoComSucesso });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async destroy(req, res) {
        try {
            await Usuario.findByIdAndRemove(req.params.id);

            return res.status(200).json({ message: message.excluidoComSucesso });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}