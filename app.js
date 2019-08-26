// Requires 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables 
var app = express();

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');
var empresaRoutes = require('./routes/empresa');
var administradorRoutes = require('./routes/administrador');
var busquedaRoutes = require('./routes/busqueda');
var uploadRoutes = require('./routes/upload');
var imagenesRoutes = require('./routes/imagenes');

// Conexión a la BD 
mongoose.connection.openUri('mongodb://localhost:27017/dashboardDB', (err, res) => {

    if(err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m','online');

});

// Rutas 
app.use('/usuario', usuarioRoutes);
app.use('/empresa', empresaRoutes);
app.use('/administrador', administradorRoutes);
app.use('/login', loginRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/upload', uploadRoutes);
app.use('/img', imagenesRoutes);

app.use('/', appRoutes);

// Escuchar peticiones 

app.listen(3000, () => {
    console.log('Express server corriendo en el puerto 3000: \x1b[32m%s\x1b[0m','online');
})