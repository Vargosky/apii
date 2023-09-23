const connection = require("./database/connection.js");
const express = require("express");
const cors = require("cors");
//crear el servidor

const app = express();
const port = 3001;


// Conexión a la base de datos
console.log("BIENVENIDO A LA API CTM");
connection();

if (connection) {

    app.get("/", (req,res)=>{
        res.send(' conectado');
    })

}
else{

}

//rutas

const routeMateriaPrima= require("./api/routes/routeMateriaPrima.js");

app.use("/mmpp", routeMateriaPrima);






// Configurar CORS para permitir cualquier origen
app.use(cors({
    origin: (origin, callback) => {
        // Permitir cualquier origen
        callback(null, true);
    },
    credentials: true,
}));






// Convertir todo a JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));






// Hacer que el servidor escuche
app.listen(port, () => {
    console.log(`Servidor de Node corriendo en el puerto ${port}`);
});