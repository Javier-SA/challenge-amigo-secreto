// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById('listaAmigos');
let ganador = document.getElementById('resultado');

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre.trim() === ""){
        alert('Por favor, inserte un nombre.');
    }else{
        amigos.push(nombre.trim());
        generarEtiqueta();
    }
    clearField('#amigo');
    console.log(amigos);  
    return;
}

function sortearAmigo(){
    if(amigos.length > 1){
        let sorteo = Math.floor(Math.random()*(amigos.length));
        ganador.innerHTML = `Ganaste: ${amigos[sorteo]}`;
    }
    return;
}

//limpiar input
function clearField(idInput){
    document.querySelector(idInput).value = '';
}

//Crear etiquetas <li>
function generarEtiqueta(){
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        let elemento = document.createElement('li');
        elemento.textContent = `${i+1}. ${amigos[i]}`;
        lista.appendChild(elemento);
    }
}