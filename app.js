let listaNumerosSorteados = [];
let titulo = document.querySelector('h1');
let parrafo = document.querySelector('p');

let numeroMaximo = parseInt(prompt("Ingresa el numero maximo de juegos que quieres"));
let numeroSecreto = generarNumeroSecreto();
mensajesIniciales();
function asignarTextoElementos(elemento, texto) {
    let titulo = document.querySelector(elemento);
titulo.innerHTML = texto;
}
let intentos = 1;
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    console.log(numeroUsuario);
    console.log("Intento número: " + intentos);
     if(numeroSecreto == numeroUsuario){
        asignarTextoElementos("p", `Adivinastes con el numero de intentos: ${intentos} ${(intentos===1)? "vez" : "veces"}` );
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if(numeroSecreto > numeroUsuario){
        asignarTextoElementos("p", "El número secreto es mayor");
        }else if(numeroSecreto < numeroUsuario){
        asignarTextoElementos("p", "El número secreto es menor");
    }
    intentos++;
    limpiarCaja();
    return;
}
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    //si el numero generado esta incluido en la lista de numeros sorteados, se vuelve a generar
    //si no, se agrega a la lista de numeros sorteados y se retorna el numero
    console.log("Numero generado: " + numeroGenerado);
    console.log("Lista de numeros sorteados: " + listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElementos("p", "No hay más números disponibles para sortear.");
    }else
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }


}

function mensajesIniciales() {
    titulo.innerHTML = "Juego de numero secreto";
    parrafo.innerHTML = "Adivina el número secreto entre 1 y " + numeroMaximo + ".";
}
function reiniciarJuego() {
    //limpiar
 limpiarCaja();
 mensajesIniciales();
 numeroSecreto = generarNumeroSecreto();
 intentos =1;
 document.getElementById("reiniciar").setAttribute("disabled", "true");
    //indicar mensaje de inventario

}



/////////////////////////////
let listaGenerica = [];
let lenguajesDeProgramacion = ["JavaScript", "C", "C#", "Kotin", "Python"];
lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");


function lenguajes(){
    for (let i=0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

function lenguajesInvertidos(){
    for (let i= lenguajesDeProgramacion.lengh -1; i > 0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
}

function promedio(numeros){
    let suma =0;
    for ( let i =0; i < numeros.lengh; i++){
        suma += numeros[i];
    }
    return suma / numeros.length;


}

function numeroMaximo(numeros){
    let maximo = numeros[0];
    for( let i = 1; i < numeros.lengh; i++){
        if(numero[i] > maximo){
            maximo = numeros[i];
        }
    }
    let minimo = 0;
    for (let i= numeros.lenght;  i > 0; i--){
        if(numeros[i] < minimo){
            minimo = numeros[i];
        }
    }
}

function  sumaNUmeros(numeros){
    let suma = 0;
    for (let i = 0; i < numeros.lengh; i++){
        suma += numeros[i];
    }
}
function elemento( posicion, lista){

    if(posicion < 0 || posicion >=lista.lengh){
return "posicion fuera de rango";
    }  else{
        return lista[posicion]
    }
}

function sumarListas(lista1, lista2){
    if(lista1.length !== lista2.lengh){
        return "las lista son diferente";
    }
    let listaGenerada = [];
    for(let i= 0; i < lista1.lengh; i++){
       listaGenerada = lista[i]+ lista2[i];
       return listaGenerada;
    }
}

function listaCuadrado(lista){
  let listaCuadrado = [];
  for(let i=0; i <lista.lengh; i++){
    listaCuadrado= lista[i]* lista[i];
    return listaCuadrado;

  }
}