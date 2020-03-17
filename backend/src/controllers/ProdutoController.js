const Produto = require('../models/Produto');
const message = require('../utils/message_PTBR');

module.exports = {
    async index(req, res) {
        try {
            const produtos = await Produto.find();

            return res.status(200).json(produtos);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async show(req, res) {
        try {
            const produto = await Produto.findById(req.params.id);

            return res.status(200).json(produto);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async store(req, res) {
        try {
            await Produto.create(req.body);

            return res.status(200).json({ message: message.salvoComSucesso });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });

            return res.status(200).json({ message: message.atualizadoComSucesso });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },

    async destroy(req, res) {
        try {
            await Produto.findByIdAndRemove(req.params.id);

            return res.status(200).json({ message: message.excluidoComSucesso });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}