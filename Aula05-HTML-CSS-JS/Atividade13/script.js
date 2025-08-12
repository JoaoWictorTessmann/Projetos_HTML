let cliques = 0;
const contador = document.getElementById("contador");
const botao = document.getElementById("botao");

function aumentarValor() {
    cliques++;
    contador.textContent = `Cliques: ${cliques}`;

    if (cliques < 5) {
        contador.style.color = 'blue';
    } else if (cliques < 10) {
        contador.style.color = 'green';
    } else {
        contador.style.color = 'red';
    }
}

botao.addEventListener('click', aumentarValor);