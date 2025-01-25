

const http = require('http') ;
const path = require('path') ;
const fs   = require('fs') ;

const hostname = "localhost" ;
const port     = 3000 ;

const server = http.createServer(
    (req,res) => {
        console.log( req.method + " " + req.url ) ;

        if( req.method == "GET" ) {
            var arch = "" ;

            if( req.url == "/" ) {
                arch = "pag1.html" ;
            } else {
                arch = req.url ;
            }

            var pathArch = path.resolve( "./public/" + arch ) ;
            var extArch = path.extname( pathArch ) ;

            if( extArch == ".html" ) {

                fs.exists( pathArch , (e) => {
                    res.setHeader( 'Content-Type','text/html' ) ;
                    if( !e ) {
                        res.statusCode = 404 ;
                        res.end('<html><head><title>Servidor</title></head><body><h1>ERROR: 404 - Recurso no existe</h1><body></html>') ;
                    }
                    res.statusCode = 200 ;
                    fs.createReadStream( pathArch ).pipe(res) ;
                } ) ;
            } else {
                res.statusCode = 404 ;      //RECURSO NO ENCONTRADO
                res.setHeader("Content-Type","text/html" ) ;
                res.end( "<html> <head> <title> MPV </title> </head> <body> <h1> RECURSO NO ENCONTRADO </h1> </body> </html>" ) ;
            }


            console.log( "path:" + pathArch ) ;
            
        } else {
            res.statusCode = 405 ;      //METODO NO ACEPTADO
            res.setHeader("Content-Type","text/html" ) ;
            res.end( "<html> <head> <title> MPV </title> </head> <body> <h1> METODO NO ACEPTADO </h1> </body> </html>" ) ;
        }
    }
) ;

server.listen( port,hostname, () => {
    console.log( `Servidor en ejecución en http://${hostname}:${port}/`) ;
} ) ;
