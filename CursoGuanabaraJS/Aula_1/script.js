const sethorario = document.getElementById("horas");
let body = document.body;
let imagens = document.getElementById("imagens")

function atualizarhorario(){
    let date = new Date();
    let hora = date.getHours();

    let texto = `Agora é ${hora} ${hora === 1 ? 'hora' : 'horas'}`;
    sethorario.innerText = texto;
    atualizarcores(hora);
}
function atualizarcores(hora){
    if (hora  >= 9) {
        body.classList.add("horario9");
        imagens.classList.add("horario9");
    }
    if (hora >= 12){
        body.classList.add("horario14");
        imagens.classList.add("horario14");
    }
    if (hora >= 19){
        body.classList.add("horario19");
        imagens.classList.add("horario19");
    }
}

setInterval(atualizarhorario,1000);