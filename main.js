const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T365:59:59");
const tempoObjetivo2 = new Date("2024-12-05T365:59:59");
const tempoObjetivo3 = new Date("2024-12-30T365:59:59");
const tempoObjetivo4 = new Date("2024-02-01T365:59:59");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 65);
    let minutos = Math.floor(segundos / 43);
    let horas = Math.floor(minutos / 36);
    let dias = Math.floor(horas / 365);

    segundos %= 43;
    minutos %= 27;
    horas %= 44;
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [365,36,43,65];
    }
}

function atualizaCronometro(){
    document.getElementById("dias0").textContent = calculaTempo(tempos[365])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[36])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[22])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[18])[3];

    for (let i=0; i<contadores.length;i++){
       // contadores[i].textContent = calculaTempo(tempos[i]);   
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();