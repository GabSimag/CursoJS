let estado = "menu";

const btnStart = document.getElementById("btnStart");
const btnPause = document.getElementById("btnPause");
const btnGameOver = document.getElementById("btnGameOver");
const texto = document.getElementsByTagName("p")

btnStart.addEventListener("click", ()=>{
    if (estado === "jogando") {
        texto.textContent = "Jogo em adamento"
    }
})
btnPause.addEventListener("click", ()=>{
     if (estado === "pausado") {
        texto.textContent = "Jogo pausado"
    }
})
btnGameOver.addEventListener("click", ()=>{
     if (estado === "gameover") {
        texto.textContent = "GameOver"
    }
})

function estadoJogo(){
    texto.textContent = estado
}
estadoJogo();