const { Router } = require('express');
const Produto = require('./models/Produto');
const ProdutoController = require('./controllers/ProdutoController');

const routes = Router();

routes.get('/produtos', ProdutoController.index);
routes.post('/produtos', ProdutoController.store);
routes.get('/produtos/:id', ProdutoController.show);
routes.put('/produtos/:id', ProdutoController.update);
routes.delete('/produtos/:id', ProdutoController.destroy);

module.exports = routes;