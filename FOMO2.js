let visitantes = 372;
const iterarFomo2 = setInterval(mostrarFomo2, 16000);

function mostrarFomo2(){
    
    fomo.style.transitionDelay = "1000ms";
    fomoH6.innerHTML = ` <font color = rgb(9, 255, 0)>${visitantes}</font> personas estan viendo esta página`;
    fomo.style.backgroundColor = `rgba(63, 80, 110, 0.856)`;
    fomo.style.display = "block";
    
    setTimeout(dejarDeMostrar2, 5000);
}

function dejarDeMostrar2(){
    fomo.style.transitionDelay = "500ms";
    fomo.style.display = "none";
    visitantes = visitantes + 6;
}