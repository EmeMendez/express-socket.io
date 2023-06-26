const socket = io();
const $txtMessage   = document.querySelector('#txt-message');
const $btnSend      = document.querySelector('#btn-send');

socket.on('connect', () => {
    console.log('Conectado');
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

$btnSend.addEventListener('click', () => {
    const message = $txtMessage.value;
    socket.emit('send-message', message)
});