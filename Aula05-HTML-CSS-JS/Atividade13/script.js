let cliques = 0;
const contador = document.getElementById("contador");

function aumentarValor() {
    cliques++;
    contador.textContent = "Cliques:"+ cliques;

    if (cliques < 5) {
        contador.style.color = "green";
    } else if (cliques >= 5 && cliques < 10) {
        contador.style.color = "orange";
    } else {
        contador.style.color = "red";
    }
}