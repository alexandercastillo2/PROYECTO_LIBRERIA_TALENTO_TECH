

module.exports = function (app) {

    var ctrlLib = require('../controlador/clibros') ;

    app.route('/api/getAllLibros')
        .get( ctrlLib.getAllLibros ) ;

    app.route('/api/getLibro')
        .get( ctrlLib.getLibro ) ;

    app.route ('/api/ejgetLibro')
        .get(ctrlLib.ejgetLibro);  
        
    app.route ('/api/updLibro/')
       .post(ctrlLib.updLibro); 
       
    app.route('/api/getAllAutores')
       .get( ctrlLib.getAllAutores ) ;

    app.route('/api/getLibroXisbn')
       .post( ctrlLib.getLibroXisbn ) ;

    

}