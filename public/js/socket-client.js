const socket = io();
const $txtMessage   = document.querySelector('#txt-message');
const $btnSend      = document.querySelector('#btn-send');

socket.on('connect', () => {
    console.log('Conectado');
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

socket.on('send-message', (payload) => {
    console.log(payload);
});

$btnSend.addEventListener('click', () => {
    const payload = $txtMessage.value;
    socket.emit('send-message', payload, ( id ) => {
        console.log('Desde el server', id);
    });
});

