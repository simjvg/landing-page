const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuración para analizar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos (como tu formulario HTML)
app.use(express.static(path.join(__dirname, '/')));

// Manejar la solicitud POST del formulario
app.post('/procesar_formulario', (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const empresa = req.body.empresa;

    // Aquí puedes realizar acciones con los datos (almacenar en la base de datos, enviar correos electrónicos, etc.)

    // Envía una respuesta de confirmación
    res.send('¡Formulario enviado con éxito!');
});

// Configurar el puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
