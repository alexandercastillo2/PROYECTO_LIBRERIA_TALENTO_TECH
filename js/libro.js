


function consultarLibro() {
    console.log("Esta es la búsqueda según el libro ");


   fetch('http://localhost:3000/api/getAllLibros', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'	
    } 
})

.then((rta) =>{return(rta.json())})
.then( (mo) => { 

    var tablib = document.getElementById( 'lstlib' ).querySelector( 'tbody' ) ;

    mo.forEach( (lib) => {

        var tr            =  document.createElement( 'tr' ) ;

        var tdIsbn        = document.createElement( 'td' ) ;
        tdIsbn.innerHTML  = lib.Isbn ;
        tr.appendChild( tdIsbn ) ;

        var tdTit         = document.createElement( 'td' ) ;
        tdTit.innerHTML   = lib.Titulo ;
        tr.appendChild( tdTit ) ;

        var tdAutor       = document.createElement( 'td' ) ;
        tdAutor.innerHTML = lib.Autor.Nombre + " " + lib.Autor.Apellidos ;
        tr.appendChild( tdAutor ) ;

        var tdFecEdi       = document.createElement( 'td' ) ;
        tdFecEdi.innerHTML = lib.fechEdicion ;
        tr.appendChild( tdFecEdi ) ;

        tablib.appendChild( tr ) ;
    } ) ;

})
.catch( (err) => {
    const miDiv = document.getElementById( 'msg' ) ;
    miDiv.innerHTML = err ;
 }) ;

}


function conLibxisbn() {
    console.log("Esta es la búsqueda según el libro ");


   fetch('http://localhost:3000/api/getAllLibros', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'	
    } 
})

.then((rta) =>{return(rta.json())})
.then(  (mo) => {
    const miDiv=document.getElementById('msg');
    /*miDiv.innerHTML=*/JSON.stringify(mo); //si la promesa es exitosa
    
    var usrIsbn = document.getElementById("isbn").value;

    mo.forEach((lib)=> {
        if(lib.Isbn == usrIsbn){
            document.getElementById("isbn").value= lib.Isbn;
            document.getElementById("titulo").value= lib.Titulo;
            document.getElementById("autor").value= lib.Autor.Nombre;
            document.getElementById("fechEdicion").value= lib.fechEdicion; 
        }
    });


})
        
    .catch (  (err) => {
        const miDiv=document.getElementById("msg");
        miDiv.innerHTML=err;})//si la promesa falla
}


function consultarAutor() {
    console.log("Esta es la búsqueda según el autor");


   fetch('http://localhost:3000/api/getAllAutores', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'	
    } 
})
.then((rta) =>{return(rta.json())})
.then(  (mo) => {
    const miDiv=document.getElementById('msg');
    /*miDiv.innerHTML=*/JSON.stringify(mo); //si la promesa es exitosa
    

    document.getElementById("isbn").value= mo[9].Isbn;
    document.getElementById("titulo").value= mo[9].Titulo;
    document.getElementById("autor").value= mo[9].Autor.Nombre;
    document.getElementById("fechEdicion").value= mo[9].fechEdicion; 
    })
        
    .catch (  (err) => {
        const miDiv=document.getElementById("msg");
        miDiv.innerHTML=err;})//si la promesa falla
}              




function anadirlibro() {

    
    

   fetch('http://localhost:3000/api/getAllLibros', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'	
        } 
    })
    .then((rta) =>{return(rta.json())})
    .then( (mo) => { 
        console.log( mo ) ;

        var temp = document.getElementById('autor').value ;
        var aNomApe = temp.split(" ") ;

        var nuevoLib = {
            Isbn: document.getElementById('isbn').value,
            Titulo: document.getElementById('titulo').value,
            Autor:{
                Nombre: aNomApe[0],
                Apellidos: aNomApe[1]
            },
            fechEdicion: document.getElementById('fechEdicion').value
        };

        var nmo = mo.push (nuevoLib);

        document.getElementById('msg').innerHTML = mo ;
        console.log( mo ) ;
        

        var tablib = document.getElementById( 'lstlib' ).querySelector( 'tbody' ) ;

    mo.forEach( (lib) => {

        var tr = document.createElement( 'tr' ) ;

        var tdIsbn = document.createElement( 'td' ) ;
        tdIsbn.innerHTML = lib.Isbn ;
        tr.appendChild( tdIsbn ) ;

        var tdTit = document.createElement( 'td' ) ;
        tdTit.innerHTML = lib.Titulo ;
        tr.appendChild( tdTit ) ;

        var tdAutor = document.createElement( 'td' ) ;
        tdAutor.innerHTML = lib.Autor.Nombre + " " + lib.Autor.Apellidos ;
        tr.appendChild( tdAutor ) ;

        var tdFecEdi = document.createElement( 'td' ) ;
        tdFecEdi.innerHTML = lib.fechEdicion ;
        tr.appendChild( tdFecEdi ) ;

        tablib.appendChild( tr ) ;
    } ) ;
        
        
    })
    .catch( (err) => {
        const miDiv = document.getElementById( 'msg' ) ;
        miDiv.innerHTML = err ;
    }) ;

}


function addLibro() {

   var temp   = document.getElementById( 'isbn' ).value ;

   var aNomApe = temp.split(" ") ;
        
    
    var data ={
         isbn:     document.getElementById  ('isbn').  value,
        titulo:    document.getElementById  ('titulo').value,
        Nombre:    aNomApe [0],
        Apellidos: aNomApe[1],
        fecedi:    document.getElementById  ('fecedi').value
    } ;
    

   fetch('http://localhost:3000/api/getAllLibros', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'	
    } 
})

.then((rta) =>{return(rta.json())})
.then( (mo) => { 

    var tablib = document.getElementById( 'lstlib' ).querySelector( 'tbody' ) ;

    mo.forEach( (lib) => {

        var tr = document.createElement( 'tr' ) ;

        var tdIsbn = document.createElement( 'td' ) ;
        tdIsbn.innerHTML = lib.Isbn ;
        tr.appendChild( tdIsbn ) ;

        var tdTit = document.createElement( 'td' ) ;
        tdTit.innerHTML = lib.Titulo ;
        tr.appendChild( tdTit ) ;

        var tdAutor = document.createElement( 'td' ) ;
        tdAutor.innerHTML = lib.Autor.Nombre + " " + lib.Autor.Apellidos ;
        tr.appendChild( tdAutor ) ;

        var tdFecEdi = document.createElement( 'td' ) ;
        tdFecEdi.innerHTML = lib.fechEdicion ;
        tr.appendChild( tdFecEdi ) ;

        tablib.appendChild( tr ) ;
    } ) ;

})
.catch( (err) => {
    const miDiv = document.getElementById( 'msg' ) ;
    miDiv.innerHTML = err ;
 }) ;

}



function BORRAR() {

    console.log("............................................." ) ;
    

   fetch('http://localhost:3000/api/getAllLibros', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'	
        } 
    })
    .then((rta) =>{return(rta.json())})
    .then( (mo) => { 
        console.log( mo ) ;

        var temp = document.getElementById('autor').value ;
        var aNomApe = temp.split(" ") ;

        var nuevoLib = {
            Isbn: document.getElementById('isbn').value,
            Titulo: document.getElementById('titulo').value,
            Autor:{
                Nombre: aNomApe[0],
                Apellidos: aNomApe[1]
            },
            fechEdicion: document.getElementById('fechEdicion').value
        };

        var nmo = mo.push (nuevoLib);

        document.getElementById('msg').innerHTML = mo ;
        console.log( mo ) ;
        

        var tablib = document.getElementById( 'lstlib' ).querySelector( 'tbody' ) ;

    mo.forEach( (lib) => {

        var tr = document.createElement( 'tr' ) ;

        var tdIsbn = document.createElement( 'td' ) ;
        tdIsbn.innerHTML = lib.Isbn ;
        tr.appendChild( tdIsbn ) ;

        var tdTit = document.createElement( 'td' ) ;
        tdTit.innerHTML = lib.Titulo ;
        tr.appendChild( tdTit ) ;

        var tdAutor = document.createElement( 'td' ) ;
        tdAutor.innerHTML = lib.Autor.Nombre + " " + lib.Autor.Apellidos ;
        tr.appendChild( tdAutor ) ;

        var tdFecEdi = document.createElement( 'td' ) ;
        tdFecEdi.innerHTML = lib.fechEdicion ;
        tr.appendChild( tdFecEdi ) ;

        tablib.appendChild( tr ) ;
    } ) ;
        
        
    })
    .catch( (err) => {
        const miDiv = document.getElementById( 'msg' ) ;
        miDiv.innerHTML = err ;
    }) ;

}

function eliminarAutor() {
    const nombreAutor = document.getElementById("authorName").value.trim();
    const mensajeError = document.getElementById("mensaje");
    const mensajeExito = document.getElementById("successMessage");

    
    mensajeError.textContent = '';
    mensajeExito.textContent = '';

    if (!nombreAutor) {
        mensajeError.textContent = "Por favor, ingresa el nombre del autor.";
        return;
    }

    
    if (!autoresDB.includes(nombreAutor)) {
        mensajeError.textContent = "El autor no existe en la base de datos.";
        return;
    }

    
    const confirmacion = confirm(`¿Estás seguro que deseas eliminar al autor: ${nombreAutor}?`);
    
    if (confirmacion) {
       
        const index = autoresDB.indexOf(nombreAutor);
        if (index !== -1) {
            autoresDB.splice(index, 1);
            mensajeExito.textContent = `El autor ${nombreAutor} ha sido eliminado exitosamente.`;
        } else {
            mensajeError.textContent = "No se pudo eliminar al autor. Intenta nuevamente.";
        
        }}
    
}

