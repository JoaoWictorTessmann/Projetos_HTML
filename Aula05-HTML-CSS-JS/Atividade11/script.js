
  function retorno(valor) {
            if (valor.trim() === "") {
                return "O campo é obrigatório.";
            } else {
                return "Campo preenchido com sucesso!";
            }
        }

        function verificarCampo() {
            const valor = document.getElementById("campotexto").value;
            const mensagem = retorno(valor);
            alert(mensagem);
        }