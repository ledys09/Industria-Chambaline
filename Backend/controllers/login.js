const usuario = require('../models/register')

//@desc     Acceder al area de usuario
//@route    POST    /api/login
//@access   Public
exports.login = async (req,res) => {
    const userData = {
        correo: req.body.correo,
        password: req.body.contrasena
    }
    usuario.findOne({ $or:  [{correo: userData.correo}, {usuario: userData.correo} ]}, (err, user) => {
        if (err) 
        return res.status(500).json({
            success : false,
            msg: 'Server error!',
            error:err
        })
            
    
        if (!user) {
          // user does not exist
          return res.status(404).json({
            success: false,
            msg: 'El usuario no existe',
            error: err
          });
        } else {
          
          if (user.contrasena === userData.password) {
            const dataUser = {
              usuario: user.usuario,
              email: user.correo,
              tipoUsuario: user.tipoUsuario
            }
            return res.status(200).json({ 
                success: true,
                msg: 'Logueado',
                data:dataUser });
          } else {
            // password wrong
           return  res.status(401).json({
            success: false,
            msg: 'Contrasena invalida',
            error:err
         });
          }
        }
      });
}