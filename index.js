const connection = require("./database/connection.js");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

// Middleware para configurar CORS
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

// Iniciar el servidor y manejar la conexión con la BD
const initializeServer = async () => {
    try {
        await connection();
        console.log("Conexión exitosa a la base de datos.");
        app.listen(port, () => {
            console.log(`Servidor de Node corriendo en el puerto ${port}`);
        });
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error.message);
    }
};

// Rutas
const routeMateriaPrima = require("./api/routes/routeMateriaPrima.js");
app.use("/mmpp", routeMateriaPrima);




app.get("/", (req, res) => {
    res.send('Conectado de forma correcta'); // Ahora solo mostramos 'Conectado' sin importar si la BD está conectada o no.....
});

// Middleware de errores (Agrega este después de todas tus rutas)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal!');
});

// Iniciar el servidor
initializeServer();
