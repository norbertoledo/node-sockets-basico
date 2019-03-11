var socket = io();
/*
Funcion que me diga
Cuando tenga una conexion
o un canal de comunicacion abierto
entre el servidor y el cliente
*/
// Los 'on' son para ESCUCHAR sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');

})

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Los 'emit' son para ENVIAR informacion
// Lo mas comun es enviar un objeto
socket.emit(
    'enviarMensaje', {
        usuario: 'Norberto',
        mensaje: 'Hola Mundo'
    },
    function(res) {
        console.log('Respuesta Servidor:', res);
    }
);

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});