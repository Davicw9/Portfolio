const cronometroDOM = document.querySelector("#cronometro");
const liTemposSalvosDOM = document.querySelector("#listaTempos");
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const cancelar = document.getElementById("cancelar");
const salvar = document.getElementById("salvar");

let segundos = 0;
let minutos = 0;
let horas = 0;
let interval;
let isRuning = false;
let temposSalvos = [];


//------INICIAR O CRONOMETRO
function start(){
    if(!isRuning){
        show();
        interval = setInterval(show, 1000);
        isRuning = true;
    }
}

//------PAUSAR O CRONOMETRO
const pause = () => {
    clearInterval(interval);
    isRuning = false;
}



//------ZERA O CRONOMETRO
const reset = () => {
    clearInterval(interval);
    segundos = 0;
    minutos = 0;
    horas = 0;
    cronometroDOM.innerHTML = "00:00:00";
    isRuning = false;
}

//------SALVAR TEMPO
const saveTime = () => {   
    if(cronometroDOM.innerHTML != "00:00:00"){
        const TempoAtual = cronometroDOM.innerHTML;
        temposSalvos.push(TempoAtual);
        showSaveTime();
    }
    liTemposSalvosDOM.scrollTop = liTemposSalvosDOM.scrollHeight;
}

//------LIMPAR LISTA DE TEMPO
const clearSaveTime = () => {   
    temposSalvos = [];
    showSaveTime();
}


const showSaveTime = () =>{
    liTemposSalvosDOM.innerHTML = "";
    temposSalvos.forEach((tempo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}.  ${tempo}`;
        liTemposSalvosDOM.appendChild(li);
    })
}


const incluiZero = (digito) => {
    if(digito < 10){
        return `0${digito}`;
    }else{
        return digito;
    }
}
const show = () => {

    cronometroDOM.innerHTML = incluiZero(horas) + ":" + incluiZero(minutos) + ":" + incluiZero(segundos);
    segundos++;
    if(segundos === 60){
        segundos = 0;
        minutos++
    }
    if(minutos === 60){
        minutos = 0;
        horas++
    }
}

iniciar.addEventListener('click', start);
pausar.addEventListener('click', pause);
cancelar.addEventListener('click', reset);
salvar.addEventListener('click', saveTime);