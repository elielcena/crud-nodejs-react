const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const router = Router();

router.get('/usuarios', UsuarioController.index);
router.post('/usuarios', UsuarioController.store);
router.get('/usuarios/:id', UsuarioController.show);
router.put('/usuarios/:id', UsuarioController.update);
router.delete('/usuarios/:id', UsuarioController.destroy);

router.post('/login', UsuarioController.authenticate);

module.exports = router;