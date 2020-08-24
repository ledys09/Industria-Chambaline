// Database: Conexión con la base de datos de Chambaline.
mongoose = require('mongoose');
require("dotenv").config({ path: "./config.env" });

const cl= process.env.USER;

class Database{
    constructor(){
        mongoose.connect(`mongodb+srv://${cl}:${cl}@chambalinedb.zpwuj.mongodb.net/${cl}?retryWrites=true&w=majority`, { useNewUrlParser: true })
/*         mongoClient.connect(`mongodb+srv://chambaline:chambaline@chambalinedb.zpwuj.mongodb.net/chambaline?retryWrites=true&w=majority`, { useNewUrlParser: true })
 */        .then(()=>{
            console.log('Conectado a la base de datos de Chambaline');
        }).catch(error=>{
            console.log(error);
        });
    }
}

module.exports = new Database();
