// Database: Conexión con la base de datos de Chambaline.
mongoose = require('mongoose');
require("dotenv").config({ path: "./config.env" });

const cl= process.env.BASE_URL;
console.log(cl);

class Database{
    constructor(){
        mongoose.connect(process.env.BASE_URL)
/*         mongoClient.connect(`mongodb+srv://chambaline:chambaline@chambalinedb.zpwuj.mongodb.net/chambaline?retryWrites=true&w=majority`, { useNewUrlParser: true })
 */        .then(()=>{
            console.log('Conectado a la base de datos de Chambaline');
        }).catch(error=>{
            console.log(error);
        });
    }
}

module.exports = new Database();

