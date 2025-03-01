// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//insertar nombre de amigos

let listaAmigos = [];
document.querySelector('#amigo').focus();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;  
} 

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    document.getElementById("resultado").innerHTML = "";
    document.querySelector('#amigo').focus();
}    
//asignar
function agregarAmigo(){
        const nombreAmigo = document.getElementById('amigo').value;
        //verificar si existe el nombre en la lista
        if (nombreAmigo === ""){
            asignarTextoElemento('h2', 'Debes ingresar un nombre');
        }
        else if (listaAmigos.includes(nombreAmigo)) {
            asignarTextoElemento('h2', 'Nombre ingresado, intenta con otro');
        } else {
            listaAmigos.push(nombreAmigo);
        
            //muesta listado de amigos ingresados por pantalla
            const lista = document.getElementById('listaAmigos');
            const nombrePantalla = document.createElement('li');
            nombrePantalla.textContent = nombreAmigo;
            lista.appendChild(nombrePantalla);

            console.log(listaAmigos); 
            asignarTextoElemento('h2', 'Digita el nombre de tus amigos');
        }
        limpiarCaja();
        return ;
        
}

//sortear amigo       
function sortearAmigo(){
    if (listaAmigos.length === 0){
        asignarTextoElemento('h2', 'Debes ingresar el nombre de tus amigos');
    }
    else {
        //muestra el nombre del amigo escogido
        const amigoElegido = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        const resultadoAmigo = document.getElementById("resultado");
        resultadoAmigo.innerHTML = `El amigo sorteado es ${amigoElegido}`;
         
    }


return;
}    