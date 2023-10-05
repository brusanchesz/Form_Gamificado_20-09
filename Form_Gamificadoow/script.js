document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.querySelector(".progress");
    const avatar = document.querySelector(".avatar img");
    const form = document.getElementById("gamified-form");

    // Número total de campos obrigatórios no formulário
    const totalFields = form.querySelectorAll("input[required], select[required]").length;

    // Inicializa o progresso com 0%
    let progressValue = 0;
    avatar.src = "img/triste.png";

    form.addEventListener("input", function () {
        const completedFields = form.querySelectorAll("input[required]:valid, select[required]:valid").length;

        // Calcula o progresso com base no número de campos preenchidos corretamente
        progressValue = (completedFields / totalFields) * 25;
        progressBar.style.width = progressValue + "%";

        // Lógica para mudar a expressão do avatar com base no progresso
        if (progressValue > 0 && progressValue < 100) {
            avatar.src = "img/pensativa.png"; // Altere para a imagem neutra
        } 
    });
    
    
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Verifica se todos os campos obrigatórios estão preenchidos corretamente antes de enviar
        const completedFields = form.querySelectorAll("input[required]:valid, select[required]:valid").length;

        if (completedFields === totalFields) {
            // Aqui você pode adicionar código para salvar as informações do formulário onde for necessário

            // Define o progresso como 100% e a imagem do avatar como feliz após o envio
            progressValue = 100;
            progressBar.style.width = progressValue + "%";
            avatar.src = "img/feliz.png"; // Altere para a imagem feliz

            // Você pode adicionar mais lógica aqui, se necessário
        } else {
            // Caso algum campo esteja inválido, você pode adicionar um feedback ao usuário aqui
            alert("Por favor, preencha todos os campos obrigatórios corretamente.");
        }

    });
});
