const vectorNombres = ["Marcelo", "Giuliana", "Juan", "Esteban", "Martin ", "Camila" ,"Walter","Rocio","Julian","Guillermo"];
const vectorApellidos = ["Andreani", "Lopez Vera", "Gonzalez","De Alesio","Moroni","Osornio","Areta","Fonseca", "Donoso","Lombardo"];

function getRandomInt(max){
    return Math.floor(Math.random() * max);
 }

function crearNombreCompleto(){
     let nombre = vectorNombres[getRandomInt(10)];
     let apellido = vectorApellidos[getRandomInt(10)];
     let nombreCompleto = ` ${nombre}`+" "+`${apellido}`
     return nombreCompleto;
}

const fomo = document.getElementById('FOMO');
const fomoH6 = document.getElementById('FOMO-h6');

const iterarFomo = setInterval(mostrarFomo, 45000);

function mostrarFomo(){
    let comprador = crearNombreCompleto();
    fomo.style.transitionDelay = "1000ms";
    fomoH6.innerHTML = ` <font color = "yellow">${comprador}</font> a accedido al programa`;
    fomo.style.display = "block";
    setTimeout(dejarDeMostrar, 6000);
}

function dejarDeMostrar(){
    fomo.style.transitionDelay = "500ms";
    fomo.style.display = "none";
}