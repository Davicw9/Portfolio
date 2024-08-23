
var selecionaDisparado = {};

var jogador1 = jogador('jogador 1', 'X', true);
var jogador2 = jogador('jogador 2', 'O', false);
const mensagem1 = 'Vitória do ' + jogador1.name;
const mensagem2 = 'Vitória do ' + jogador2.name;

var modal = document.getElementById('modal');
var resultado = document.getElementById('resultado');

const mostrarOpcao = (event, numeroDiv) => {
    if(!selecionaDisparado[numeroDiv]){
        if(jogador1.jogada){
            var idDaTag = event.target;
            idDaTag.textContent = jogador1.simbolo;
            idDaTag.style.color = 'rgba(255, 255, 255, 0.7)';
        }else{
            var idDaTag = event.target;
            idDaTag.textContent = jogador2.simbolo;
            idDaTag.style.color = 'rgba(0, 0, 0, 0.5)';
        }
    }/*else{
        console.log('Evento já foi disparado recentemente para Div ' + numeroDiv);
    }*/
}

const reverte = (event, numeroDiv) => {
    if(!selecionaDisparado[numeroDiv]){
        var idDaTag = event.target;
        idDaTag.textContent = '';
    }/*else{
        console.log('Evento já foi disparado recentemente para Div ' + numeroDiv);
    }*/
}  

const seleciona = (event, numeroDiv) => {
    if(!selecionaDisparado[numeroDiv]){
        if(jogador1.jogada){
            var idDaTag = event.target;
            idDaTag.textContent = jogador1.simbolo;
            idDaTag.style.color = '#ffffff';
            console.log(jogador1.name, ' realizou uma jogada');
            jogador1.jogada = false;
        }else{
            var idDaTag = event.target;
            idDaTag.textContent = jogador2.simbolo;
            idDaTag.style.color = '#000000';
            console.log(jogador2.name, ' realizou uma jogada');
            jogador1.jogada = true;
        }
    }
    selecionaDisparado[numeroDiv] = true;
    
    var celulas = document.getElementsByClassName('quadrados');

    // Array bidimensional representando o tabuleiro
    var tabuleiro = [
        [celulas[0].textContent, celulas[1].textContent, celulas[2].textContent],
        [celulas[3].textContent, celulas[4].textContent, celulas[5].textContent],
        [celulas[6].textContent, celulas[7].textContent, celulas[8].textContent]
    ];

    // Verificar linhas, colunas e diagonais
    for (var i = 0; i < 3; i++) {
        // Verificar linhas e colunas
        if ((tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2] && tabuleiro[i][0] !== '') ||
            (tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i] && tabuleiro[0][i] !== '')) {
            // Condição de vitória encontrada
            if(!jogador1.jogada){
                resultado.textContent = mensagem1;
                modal.style.display = 'flex';
                console.log('Vitória do ', jogador1.name);
            }else{
                resultado.textContent = mensagem2;
                modal.style.display = 'flex';
                console.log('Vitória do ', jogador2.name);
            }
            
            return true;
        }
    }

    // Verificar diagonais
    if ((tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && tabuleiro[0][0] !== '') ||
        (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && tabuleiro[0][2] !== '')) {
        // Condição de vitória encontrada
        if(!jogador1.jogada){
            resultado.textContent = mensagem1;
            modal.style.display = 'flex';
        }else{
            resultado.textContent = mensagem2;
            modal.style.display = 'flex';
        }
        //return true;
    }

    // Verificar empate
    var todasPreenchidas = true;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === '') {
                todasPreenchidas = false;
                break;
            }
        }
    }

    if (todasPreenchidas) {
        // Todas as células foram preenchidas e ninguém venceu
        resultado.textContent = 'EMPATE';
        modal.style.display = 'flex';
    }
    //return false;
}
const reiniciarJogo = () => {
    location.reload();
}
