// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de 
// programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Amigo Secreto

let listaAmigos = [];
const mensajeElemento = document.querySelector('h2');
//deja el cursor en input-name
document.querySelector('#amigo').focus();

//cambia mensaje del h2, según la acción del usuario
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;  
} 

//borra lo escrito en input-name
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    document.getElementById("resultado").innerHTML = "";
    document.querySelector('#amigo').focus();
}    

//cambia el color del mensaje de h2 
function nuevoColor (){
        mensajeElemento.style.color = '#FF0000';  // Cambiar color del texto a rojo
}

//vuelve al color original de h2
function antiguoColor (){
        mensajeElemento.style.color = '#4B69FD';  // Cambiar color del texto a rojo
}

//ingreso de nombres de amigos
function agregarAmigo(){
        const nombreAmigo = document.getElementById('amigo').value;
            
        //verificar si existe el nombre en la lista
        //si esta en blanco o si el nombre ya fue ingresado
        if (nombreAmigo === ""){
            
            asignarTextoElemento('h2', 'Debes ingresar el nombre de tus amigos');
        
        // Cambiar color del texto a rojo
        nuevoColor();
        }
        else if (listaAmigos.includes(nombreAmigo)) {
            asignarTextoElemento('h2', 'Nombre ingresado, intenta con otro');
            nuevoColor();
        } else {
            listaAmigos.push(nombreAmigo);
        
            //muesta listado de amigos ingresados por pantalla
            const lista = document.getElementById('listaAmigos');
            const nombrePantalla = document.createElement('li');
            nombrePantalla.textContent = nombreAmigo;
            lista.appendChild(nombrePantalla);

            //resetea el ingreso de nombres de amigos al ser un nombre válido
            asignarTextoElemento('h2', 'Digita el nombre de tus amigos');
            antiguoColor();
        }
        limpiarCaja();
        return ;
        
}

//sortear amigo de la lista ingresada       
function sortearAmigo(){
    if (listaAmigos.length === 0){
     //verifica que al menos exista un registro en el listado de amigos
        asignarTextoElemento('h2', 'Debes ingresar el nombre de tus amigos');
        nuevoColor();
    }
    else {
        //muestra el nombre del amigo escogido
        const amigoElegido = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        const resultadoAmigo = document.getElementById("resultado");
        resultadoAmigo.innerHTML = `El amigo sorteado es ${amigoElegido}`;
         
    }
return;
}    
