const express = require('express');
const cors = require('cors');
const config = require('../config/app');
const socketController = require('../sockets/socket.controller');

class Server {

    constructor(){
        this.app = express();
        this.port = config.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.middlewares();
        this.routes();
        this.listen();
        this.sockets();
    }

    routes(){
        // this.app.use('/api/users', require('../routes/users.router'));
    }

    middlewares(){
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json());
        this.app.use(express.static('public'));
        // this.app.use('storage', express.static('storage'));
        // this.app.use(fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath: true
        // }));
    }

    //socket server
    sockets(){
        this.io.on('connection', socketController);
    }

    listen(){
        this.server.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`);
        })
    }
}

module.exports = Server