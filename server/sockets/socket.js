const {io} = require('../server');


// Saber cuando un usuario se conecta al servidor
// el objeto 'client' obtiene toda la informacion de la computadora cliente que establecio la conexion
io.on('connection', (client)=>{
    console.log('Usuario Conectado');


    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta app'
    });


    client.on('disconnect', ()=>{
        console.log('Usuario Desconectado');
    });


    // Escuchar al cliente
    client.on('enviarMensaje', ( data, callback )=>{
        console.log( data );

        // Envio un mensaje AL RESTO de los usuarios que esten conectados a la aplicacion
        client.broadcast.emit('enviarMensaje', data);
       /*
        if(mensaje.usuario){
            callback({
                respuesta: 'Todo salio bien'
            })
        }else{
            callback({
                respuesta: 'Todo salió mal!!!!'
            });
        }
        */


    });

});