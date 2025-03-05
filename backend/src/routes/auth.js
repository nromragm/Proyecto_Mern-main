const { Router } = require('express');
const usuarioCtrl = require('../controller/usuario.controller');

const router = Router();

// Ruta para el inicio de sesión
router.post('/login', usuarioCtrl.login);

module.exports = router;