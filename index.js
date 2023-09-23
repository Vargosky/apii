const connection = require("./database/connection.js");
const express = require("express");
const cors = require("cors");

const app = express();

// Conexión a la base de datos
console.log("BIENVENIDO A LA API CTM");
connection();

// Aquí hemos eliminado el condicional de conexión porque
// no tiene efecto real sobre la conexión en sí.
// Si la conexión falla, ya se registrará un error desde tu archivo de conexión.
app.get("/", (req, res) => {
    res.send('API Funcionando');
});

// Rutas
const routeMateriaPrima = require("./api/routes/routeMateriaPrima.js");
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

// Exportamos la aplicación para Vercel
module.exports = app;
