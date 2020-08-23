// Database: Conexión con la base de datos de Chambaline.
var mongoose = require('mongoose');

var servidor = process.env.DBCL;
//var db = 'chambaline';

class Database{
    constructor(){
        mongoose.connect(`mongodb://${servidor}`)
        .then(()=>{
            console.log('Conectado a la base de datos de Chambaline');
        }).catch(error=>{
            console.log(error);
        });
    }
}

module.exports = new Database();
