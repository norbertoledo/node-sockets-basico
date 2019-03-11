const express = require('express');
const socketIO = require('socket.io');
// Modulo http que trae Node por defecto. Nos permite levantar un servidor y otras cosas
const http = require('http');

const path = require('path');

// socketIO no trabaja directamentre con express. si lo hace con un servidor por defecto de NodeJS 
// Cuando montamos un servidor express, tras bambalinas utiliza funciones de http normal de Node
const app = express();

// Crea un pequeño servidor de produccion. Tenemos montado el servidor con toda la configuracion que le podriamos hacer al express
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = Va a mantener una conexion directa. Es la comunicacion del backend. Inicializar el socketIO
module.exports.io = socketIO(server);

require('./sockets/socket');



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});