
/*const mongoose = require('mongoose') ;*/

const express = require('express');
const http    = require('http') ;
const morgan  = require('morgan') ;
const bp      = require('body-parser') ;
const cors    = require('cors') ;

const hostname = 'localhost' ;
const port     = 3000 ;

//----------------------------------------------------------------------
//CONEXION A MONGODB
//----------------------------------------------------------------------
/*
var bdURL = 'mongodb:' ;
mongoose.connect( bdURL ) ;

/*
//CONFIGURACION DE LOS EVENTOS DE LA CONEXION

mongoose.connection.on('conected' , function() 
{
     console.log("conexion a mongodb se realize en: " + bdURL) } );

mongoose.connection.on('error' , function(err){
    console.log("ERROR: nohay conexion con mongodb: " + err )
} );

mongoose.connection.on('disconected', function(msg){
    console.log("Desconexion a mongodb realizada con exito: " + msg ) 
}); */

//CUANDO NODE SE DESCONECTA DE MONGODB

process.on('SIGINT' ,function() {
    mongoose.connection.close.log( "conexion a mongodb terminada del servidor") ;
    process.exit(0) ;
})


//---------------------------------------------------------------------



const app = express() ;

app.use( morgan('dev') ) ;
app.use( cors() ) ;
app.use( bp.json() ) ;

require( './rutas/rlibros')( app ) ;

app.listen( port,hostname, () => {
    console.log( `Server running at http://${hostname}:${port}/` ) ;
} ) ;