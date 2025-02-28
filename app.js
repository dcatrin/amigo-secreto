// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//insertar nombre de amigos

let listaAmigos = [];


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;  
} 

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}    
//asignarTextoElemento('p', 'Indica un número del 1 al 10');
//guardar nombre de amigos aca ver si el nombre ingresado ya existe no deberia incluirlo 
function agregarAmigo(){
        const nombreAmigo = document.getElementById('amigo').value;
        //verificar si existe el nombre en la lista
        if (listaAmigos.includes(nombreAmigo)) {
            asignarTextoElemento('h2', 'Amigo ingresado, intente con otro');
        } else {
            listaAmigos.push(nombreAmigo);

            const lista = document.getElementById('listaAmigos');
            const li = document.createElement('li');
            li.textContent = nombreAmigo;
            lista.appendChild(li);




            console.log(listaAmigos); 
            asignarTextoElemento('h2', 'Digite el nombre de sus amigos');
        }
        
        //prueba
        
        //esto sirve para ver el tipo de dato q ingreso el usuario
        //console.log(typeof(numeroDeUsuario));
        //console.log (numeroDeUsuario === numeroSecreto);
        //intentos++
        limpiarCaja();
         return ;
        
}
//asignarTextoElemento('h2', 'Digite el nombre de sus amigos');
       


//cambiar titulo de arriba  
//pedir nombre para comenzar sorteo  
//elegir nombre menos el q esta jugando
// //devolver nombre sorteado
//sacar nombre seleccionado y agregar nombre del jugador anterior
//volver a pedir nombre a jugador y repetir ciclo  