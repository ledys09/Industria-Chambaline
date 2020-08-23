const userService = require('../models/services')

//@desc     data de servicios
//@route    GET /api/datadb/services/:category
//@access   Private

exports.services = async (req, res) => {
    const category = req.params.category;
    //res.send(category);
    const servicios = await userService.find({"servicios.categoria": category},
    {
        primerNombre :1, 
        segundoNombre: 1,
        primerApellido: 1,
        fotoPerfil: 1,
        'servicios.nombreServicio' : 1,
        'servicios.descripcionServicio': 1,
        'servicios.categoria': 1,

    });
    
    try {
        if(servicios.length === 0){
            return res.status(404).json({
                success: false,
                msg: "Data not found",
                
            })
        }
        res.send(servicios);
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Server error",
            error: error
        });
    }

}

//@desc     data de usuario servicio
//@route    GET /api/datadb/userservice/:id
//@access   Private

exports.userservice = async (req, res) => {
    const id = req.params.id;
    //res.send(category);
    const userserv = await userService.findOne({"_id": id},
    {
        primerNombre :1, 
        segundoNombre: 1,
        primerApellido: 1,
        segundoApellido: 1,
        correo: 1,
        telefono: 1,
        fotoPerfil: 1,
        'servicios.descripcionServicio': 1,
        'servicios.categoria': 1,
    });
    
    try {
        if(userserv.length === 0){
            return res.status(404).json({
                success: false,
                msg: "Data not found",
                
            })
        }
        res.send(userserv);
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: "Server error",
            error: error
        });
    }

}
