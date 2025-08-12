let iNumero = prompt("Digite um numero!");

function verificarNumero() {
  if (iNumero < 0) {
    return "O numero é negativo!";
  } else if (iNumero == 0) {
    return "O numero é zero!";
  } else {
    return "O numero é positivo!";
  }
}
alert(verificarNumero());
