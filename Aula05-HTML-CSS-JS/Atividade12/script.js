function calcularIMC() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  let imc = calcular(peso, altura);
  let resultado = exibirResultado(imc);

  alert(`Seu IMC é ${imc.toFixed(2)} - ${resultado}`);
  /*.toFixed transforma o numero "da var -imc-" em uma 
    string com "(2)- duas casas decimais"*/
}

function calcular(peso, altura) {
  return peso / (altura * altura);
}

function exibirResultado(imc) {
  if (imc >= 18.5 && imc <= 25) {
    return "Peso normal";
  } else if (imc > 25) {
    return "Sobrepeso!";
  } else {
    return "Abaixo do peso!";
  }
}
