const express = require('express');
require('dotenv').config()
const { dbConnection } = require('../database/config')
const cors = require('cors')
const {socketController} = require('../Controllers/sockets')

class Server {
    constructor(){
        this.headers={
            cors:{
                origin:"http://localhost:3000",
                methods:["GET","POST"]
            }
        }
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server)

        this.paths = {
            auth: '/api/auth',
            task: '/api/task',
            Cart: '/api/Cart'
        }

        this.connectToDB();
        this.addMidlewares();
        this.setRoutes();

        //sockets
        this.sockets()
    }

    // base datos
    async connectToDB() {
        await dbConnection();
    }

    addMidlewares() {
        //cors
        this.app.use(cors(this.headers));
        //lectura y parseo del body
        this.app.use( express.json() );
        //folder público
        this.app.use( express.static('public') );
    }

    setRoutes() {
        //rutas
        this.app.use( this.paths.auth, require('../routes/auth'))
        this.app.use( this.paths.task, require('../routes/task'))
        this.app.use( this.paths.Cart, require('../routes/Cart'))
    }

    sockets(){
      this.io.on(
        'connection',
        socket=>socketController(socket,this.io)
      )
    }

    listen() {
        //escuchar en puerto 400
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT)
        })
    }

    
}

module.exports = Server; 