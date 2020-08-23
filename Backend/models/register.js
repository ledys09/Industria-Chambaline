const mongoose = require("mongoose")
const Schema  = mongoose.Schema;

const registerSchema = new Schema ({
    nombre:     {type: String, required: true},
    apellido:   {type: String, required: true},
    usuario:    {type: String, required: true},
    contrasena: {type: String, required: true},
    correo:     {type: String, required: true},
    telefono:   {type: String, required: true},
    tipoUsuario:{type: String, required: true},
    fotoPerfil: {type: String, required: true},
});

module.exports = mongoose.model('usuariosVisita', registerSchema)