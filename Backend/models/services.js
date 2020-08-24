const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const userService = new Schema ({
    primerNombre:       {type: String, required: true},
    segundoNombre:      {type: String, required: true},
    primerApellido:     {type: String, required: true},
    segundoApellido:    {type: String, required: true},
    edad:               {type: Number, required: true},
    telefono:           {type: Number, required: true},
    correo:             {type: String, required: true},
    nombreUsuario:      {type: String, required: true},
    password:           {type: String, required: true},
    fotoPerfil:         {type: String, required: true},
    tipoUsuario:        {type: Number, required: true},
    servicios:         [{ 
        nombreServicio:     {type: String, required: true},
        descripcionServicio:{type: String, required: true},
        categoria:          {type: Number, required: true},
        publicaciones:      [{
                    contenido:  {type: String, required: true },
                    imagen:     {type: String, required: true}, 
        }],
     }],

});

module.exports = mongoose.model('usuarios', userService)