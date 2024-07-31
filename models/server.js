const express = require('express')
const cors=require('cors')

class Server{
    constructor(){
        this.app = express()
        this.port=process.env.PORT || 3000;
        this.usuariosPath='/api/usuarios';

        //Middlewares
        this.middlewares();
        //rutas
        this.routes();

    }
    middlewares(){
        //CORS: quien puede ver la app
        this.app.use(cors());
        //Lectura y parseo del body


        this.app.use( express.json())
        //Directorio publico

        this.app.use(express.static('public'));
    }
        //Rutas de la aplicacion
       
    routes(){
       this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto',this.port)
        })
    }
}


module.exports=Server;
