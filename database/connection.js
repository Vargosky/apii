const mongoose = require("mongoose");

const connection = async ()=>{

    const bdName = "Damasco";
    const urlLocal = "mongodb://127.0.0.1:27017/";
    const urlCloud = "mongodb+srv://saremvargas:Sarem1509@cluster0.j4tuv0s.mongodb.net/";
    

    try {
        await mongoose.connect(urlCloud+bdName);
        console.log("conectado correctamente a la BASE DE DATOS :"+bdName +"en la direccion "+urlCloud);
    } catch (error) {
        console.log(error);
        throw new error ("no se pudo conectar a base de datos: "+bdName);
    }


}

module.exports = connection;