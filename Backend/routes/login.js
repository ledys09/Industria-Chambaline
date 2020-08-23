const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { login } = require('../controllers/login');

router.route("/").post([
    check("contrasena", "Ingrese contraseña valida").exists(),
    check("correo", "Ingrese correo válido").exists()
], login);
 
module.exports = router;