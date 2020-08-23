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
/* 

const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  calories: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Negative calories aren't real.");
    }
  },
});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food; */