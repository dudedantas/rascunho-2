function calcularPlanos() {
    var nome = document.getElementById("name").value;
    var numeroPessoas = document.getElementById("people").value;
    var faixaEtaria = document.getElementById("age").value;


    var resultadoHTML = "<h2>Resultado para " + nome + "</h2>";
    resultadoHTML += "<p>Número de Pessoas: " + numeroPessoas + "</p>";
    resultadoHTML += "<p>Faixa Etária: " + faixaEtaria + "</p>";


    document.getElementById("resultado").innerHTML = resultadoHTML;
}
