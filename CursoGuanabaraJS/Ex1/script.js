const timerLigado = document.getElementById("timer");
const btnStart = document.getElementById("btnStart");
const btnPause = document.getElementById("btnPause");
const btnGameOver = document.getElementById("btnGameOver");

let tempo = 0;
let jogoIniciado = false;
let pausado = false;
let intervaloTempo = null;
function contadorTempo(){
    if (jogoIniciado && !pausado) {
        tempo += 0.1;
        timerLigado.textContent = tempo.toFixed(1) + "s";
    }

    intervaloTempo = setTimeout(contadorTempo, 100);
}
contadorTempo();
btnStart.addEventListener("click", ()=>{
    jogoIniciado = true;
    pausado = false;
    if (!intervaloTempo) {
        contadorTempo();
    }
})
btnPause.addEventListener("click", ()=>{
    pausado = true;
})

btnGameOver.addEventListener("click", ()=>{
    jogoIniciado = false;
    pausado = false;
    tempo = 0;
    clearTimeout(intervaloTempo);
    intervaloTempo = null;
})
