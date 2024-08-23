function capturarId(elemento) {
        var idDoBotao = elemento.value;
        
        var tela = document.querySelector("#tela");
        tela.value = tela.value + idDoBotao;
}       
function apagarTudo(){
        document.querySelector("#tela").value = "";
}
function resultado() {
        var expressao = document.querySelector("#tela").value;

    try {
        var resultado = eval(expressao);

        if (isNaN(resultado) || !isFinite(resultado)) {
            throw new Error("Expressão inválida");
        }

        document.querySelector("#tela").value = resultado;
    } catch (error) {
        // Tratar o erro e informar ao usuário
        document.querySelector("#tela").value = "Erro";
        console.error("Erro: " + error.message);
    }
}

/*document.getElementById('igual').addEventListener('click', function() {
        var expressao = document.querySelector("#tela").value;
        var resultado = eval(expressao);
        document.querySelector("#tela").value = resultado;
});*/