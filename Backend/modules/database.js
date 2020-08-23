// Database: Conexión con la base de datos de Chambaline.
// mongoose = require('mongoose');
const mongoClient = require("mongodb").MongoClient;
/* require("dotenv").config({ path: "../config.env" }); */

/* var servidor = 'localhost:27017';
var db = 'chambaline'; */
class Database{
    constructor(){
        mongoClient.connect(`mongodb+srv://chambaline:chambaline@chambalinedb.zpwuj.mongodb.net/chambaline?retryWrites=true&w=majority`, { useNewUrlParser: true })
        .then(()=>{
            console.log('Conectado a la base de datos de Chambaline');
        }).catch(error=>{
            console.log(error);
        });
    }
}

module.exports = new Database();
