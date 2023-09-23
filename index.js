const connection = require("./database/connection.js");
const express = require("express");
const cors = require("cors");
//crear el servidor

const app = express();
const port = 3001;

//temporal
const RawMaterial = require('./api/model/MateriaPrima.js');

const getAllRawMaterials = async (req, res) => {
    try {
        const rawMaterials = await RawMaterial.find().sort({ name: 1 });
        res.status(200).json(rawMaterials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




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


app.get("/", getAllRawMaterials);




// Convertir todo a JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a la base de datos
console.log("BIENVENIDO A LA API CTM");
connection();





// Hacer que el servidor escuche
app.listen(port, () => {
    console.log(`Servidor de Node corriendo en el puerto ${port}`);
});