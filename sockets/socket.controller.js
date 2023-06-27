
const socketController = (socket) => {
    socket.on('send-message', ( payload, callback ) => {
        const id = 'abc123';
        callback(id);
       socket.broadcast.emit('send-message', payload)
    });
};

module.exports = socketController;