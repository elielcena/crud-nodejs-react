const { Router } = require('express');
const ProdutoController = require('../controllers/ProdutoController');
const authMiddleware = require('../middlewares/AuthMiddleware');

const router = Router();
router.use(authMiddleware);

router.get('/produtos', ProdutoController.index);
router.post('/produtos', ProdutoController.store);
router.get('/produtos/:id', ProdutoController.show);
router.put('/produtos/:id', ProdutoController.update);
router.delete('/produtos/:id', ProdutoController.destroy);

module.exports = router;