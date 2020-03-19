const { Router } = require('express');
const AuthController = require('../controllers/AuthController');

const router = Router();

router.post('/login', AuthController.authenticate);

module.exports = router;