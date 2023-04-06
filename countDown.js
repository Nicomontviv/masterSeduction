const startingMinutes = 386;
var time;
 

if ((typeof(Storage) !== 'undefined') && ((isNaN(localStorage.getItem("tiempo")) ==false))) {
    time = parseInt(localStorage.getItem("tiempo"));
    console.log(time);
} else{
    time = startingMinutes * 60;}
if( isNaN(time)){
        time = startingMinutes * 60;
    }

const countDownEl = document.querySelectorAll('.countDown-box__countDown');


function mostrarCartelVenta(){
    countDownEl.style.fontSize = `7vw`;
    countDownEl.style.fontFamily = `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`;
    countDownEl.style.padding = `15%`; 
    countDownEl.innerHTML = ` Ya puedes acceder al programa!`;
}



const iterarCountDown = setInterval(updateCountdown, 1000 );

function updateCountdown(){
    const hours = Math.trunc((time / 60)/60);
    const minutes = Math.floor((time / 60)%60);
    let seconds = time % 60;
    for(i=0;i<countDownEl.length;i++){
        countDownEl[i].innerHTML = `${0}${hours}:${minutes}:${seconds}`;
    };
   
    time--
    let timo = time;
    localStorage.setItem("tiempo", timo);
    if(time < 0){
            clearInterval(iterarCountDown);
            mostrarCartelVenta();
        
    }
}

