const { Router } = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = Router();

router.get('/produtos', ProdutoController.index);
router.post('/produtos', ProdutoController.store);
router.get('/produtos/:id', ProdutoController.show);
router.put('/produtos/:id', ProdutoController.update);
router.delete('/produtos/:id', ProdutoController.destroy);

module.exports = router;