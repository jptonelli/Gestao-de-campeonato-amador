document.addEventListener("DOMContentLoaded", function() {
    const contactNumberInput = document.getElementById("contactNumber");

    // Função para aplicar a máscara ao número de telefone
    function maskPhone(event) {
        let input = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        input = input.substring(0, 11); // Limita o tamanho do número a 11 dígitos (com DDD)

        let formattedInput = input.replace(/^(\d{2})(\d)/g, '($1) $2'); // Aplica a máscara (XX)
        formattedInput = formattedInput.replace(/(\d)(\d{4})$/, '$1-$2'); // Aplica a máscara XXXXX-XXXX

        event.target.value = formattedInput; // Atualiza o valor do input com a máscara aplicada
    }

    // Adiciona o evento 'input' para aplicar a máscara enquanto o usuário digita
    contactNumberInput.addEventListener("input", maskPhone);

    // Restante do código para enviar o formulário
    document.getElementById("teamForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Captura dos dados do formulário
        const teamName = document.getElementById("teamName").value;
        const coachName = document.getElementById("coachName").value;
        const teamCity = document.getElementById("teamCity").value;
        const contactNumber = document.getElementById("contactNumber").value;
        const email = document.getElementById("email").value;
        const numPlayers = document.getElementById("numPlayers").value;

        console.log("Dados capturados:", {
            teamName,
            coachName,
            teamCity,
            contactNumber,
            email,
            numPlayers
        });

        // Verifica se o elemento 'result' existe
        const resultDiv = document.getElementById("result");
        if (resultDiv) {
            // Exibe os dados cadastrados
            resultDiv.innerHTML = `<p>Equipe <strong>${teamName}</strong> cadastrada com sucesso!</p>
                                    <p>Técnico: ${coachName}</p>
                                    <p>Cidade: ${teamCity}</p>
                                    <p>Contato: ${contactNumber}</p>
                                    <p>E-mail: ${email}</p>
                                    <p>Número de Jogadores: ${numPlayers}</p>`;
        } else {
            console.error("Elemento 'result' não encontrado no DOM.");
        }

        // Limpa o formulário
        document.getElementById("teamForm").reset();
    });
});
