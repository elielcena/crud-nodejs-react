const Usuario = require('../models/Usuario');
const utils = require('../utils');

module.exports = {
    async index(req, res) {
        try {
            const usuarios = await Usuario.find();
            return res.status(200).json(usuarios);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async show(req, res) {
        try {
            const usuario = await Usuario.findById(req.params.id);
            return res.status(200).json(usuario);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async store(req, res) {
        try {
            let usuario = req.body;
            usuario.senha = await utils.encriptarSenha(usuario.senha);
            await Usuario.create(usuario);
            return res.status(200).json(usuario);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async update(req, res) {
        try {
            const usuario = req.body;
            usuario.senha = await utils.encriptarSenha(usuario.senha);
            await Usuario.findByIdAndUpdate(req.params.id, usuario, { new: true });
            return res.status(200).json(usuario);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async destroy(req, res) {
        try {
            await Usuario.findByIdAndRemove(req.params.id);
            return res.status(200).json({ message: 'Excluido com sucesso!' });
        } catch (err) {
            return res.status(400).json(err);
        }
    }
}