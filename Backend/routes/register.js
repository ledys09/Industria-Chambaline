const express = require('express')
const router = express.Router()
const {check} = require('express-validator')
const {register} = require('../controllers/register')

router.route("/").post([
    check("nombre", "Ingrese nombres válidos").exists(),
    check("apellido", "Ingrese apellidos válidos").exists(),
    check("usuario", "Ingrese usuario válido").exists(),
    check("contrasena", "Ingrese 8 caracteres min").isLength({ min:8 }),
    check("correo", "Ingrese correo válido").isEmail(),
    check("telefono", "Ingrese teléfono válido").isNumeric(),

 ], 
 register);

module.exports = router;