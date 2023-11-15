function calcularPlanos() {
    const idade = parseInt(document.getElementById('age').value);
    const peso = parseFloat(document.getElementById('weight').value);
    const altura = parseFloat(document.getElementById('height').value);
  
    const imc = peso / (altura * altura);
  
    // Operadora A
    const operadoraA = {
      basico: 100 + (idade * 10 * (imc / 10)),
      standard: (150 + (idade * 15)) * (imc / 10),
      premium: (200 - (imc * 10) + (idade * 20)) * (imc / 10)
    };
  
    // Operadora B
    let fatorComorbidade = 0;
    if (imc < 18.5) {
      fatorComorbidade = 10; // abaixo do peso
    } else if (imc >= 18.5 && imc < 24.9) {
      fatorComorbidade = 1; // normal
    } else if (imc >= 25 && imc < 29.9) {
      fatorComorbidade = 6; // sobrepeso
    } else if (imc >= 30 && imc < 34.9) {
      fatorComorbidade = 10; // obesidade
    } else if (imc >= 35 && imc < 39.9) {
      fatorComorbidade = 20; // obesidade mórbida grave
    } else {
      fatorComorbidade = 30; // obesidade mórbida muito grave
    }
  
    const operadoraB = {
      basico: 100 + (fatorComorbidade * 10 * (imc / 10)),
      standard: (150 + (fatorComorbidade * 15)) * (imc / 10),
      premium: (200 - (imc * 10) + (fatorComorbidade * 20)) * (imc / 10)
    };
  
    // Exibindo os resultados em um div
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
      <h3>Operadora A:</h3>
      <p>Plano Básico: ${operadoraA.basico}</p>
      <p>Plano Standard: ${operadoraA.standard}</p>
      <p>Plano Premium: ${operadoraA.premium}</p>
      <h3>Operadora B:</h3>
      <p>Plano Básico: ${operadoraB.basico}</p>
      <p>Plano Standard: ${operadoraB.standard}</p>
      <p>Plano Premium: ${operadoraB.premium}</p>
    `;
  }
  





/*/function calcularPlanos() {
    var nome = document.getElementById("name").value;
    var numeroPessoas = document.getElementById("people").value;
    var faixaEtaria = document.getElementById("age").value;


    var resultadoHTML = "<h2>Resultado para " + nome + "</h2>";
    resultadoHTML += "<p>Número de Pessoas: " + numeroPessoas + "</p>";
    resultadoHTML += "<p>Faixa Etária: " + faixaEtaria + "</p>";


    document.getElementById("resultado").innerHTML = resultadoHTML;
} /*/