const connectToDatabase = require("./database/connection.js");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

// Función para inicializar el servidor y la conexión a la base de datos
const initializeServer = async () => {
    try {
        // Intentar establecer conexión con la base de datos
        await connectToDatabase();

        console.log("BIENVENIDO A LA API CTM");

        // Ruta principal para verificar si la API está corriendo
        app.get("/", (req, res) => {
            res.send('API conectada y funcionando');
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

        // Iniciar el servidor en el puerto especificado
        app.listen(port, () => {
            console.log(`Servidor de Node corriendo en el puerto ${port}`);
        });
    } catch (error) {
        console.error("No se ha podido conectar:", error.message);
    }
}

// Iniciar la aplicación
initializeServer();
