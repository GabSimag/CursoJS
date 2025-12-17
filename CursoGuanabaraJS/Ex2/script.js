const btnStart = document.getElementById("btnStart");
const btnPause = document.getElementById("btnPause");
const btnRestart = document.getElementById("btnRestart");
const timer = document.getElementById("timer");

let intervaloTempo = null;
let inicarContagem = false;
let pause = false;
let tempo = 0;
let restart = false;

//Controle para iniciar
btnStart.addEventListener("click", ()=>{
    if(inicarContagem)return;
    inicarContagem = true
    pause = false
    controleTimer();
})
//controle para pausar
btnPause.addEventListener("click", ()=>{
    pause = true
    inicarContagem = false;
    
})
//controle para reiniciar
btnRestart.addEventListener("click", () => {
    inicarContagem = false;
    pause = false;
    tempo = 0;
    clearTimeout(intervaloTempo);
    intervaloTempo = null;
    timer.textContent = "00:00";
})


//timer
function controleTimer(){
    if (!inicarContagem){
        intervaloTempo = null;
        return;
    }
    if (!pause) {
        tempo += 0.1;
        timer.textContent = tempo.toFixed(1);
    }
    intervaloTempo = setTimeout(controleTimer, 100);
}