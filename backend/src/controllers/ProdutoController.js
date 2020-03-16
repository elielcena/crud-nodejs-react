const Produto = require('../models/Produto');

module.exports = {
    async index(req, res) {
        try {
            const produtos = await Produto.find();
            return res.status(200).json(produtos);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async show(req, res) {
        try {
            const produto = await Produto.findById(req.params.id);
            return res.status(200).json(produto);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async store(req, res) {
        try {
            const produto = await Produto.create(req.body);
            return res.status(200).json(produto);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async update(req, res) {
        try {
            const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json(produto);
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    async destroy(req, res) {
        try {
            await Produto.findByIdAndRemove(req.params.id);
            return res.status(200).json({ message: 'Excluido com sucesso!' });
        } catch (err) {
            return res.status(400).json(err);
        }
    }
}