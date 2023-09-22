
document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.querySelector(".progress");
    const avatar = document.querySelector(".avatar img");
    const avatarPensativo = document.querySelector(".avatarPensativo");
    const avatarTriste = document.querySelector(".avatarTriste");

    const form = document.getElementById("gamified-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        progressBar.style.width = "100%";
        avatar.src = "img/feliz.png"; // Altere para o caminho da imagem feliz

        // Aqui você pode adicionar código para salvar as informações do formulário
    });

    const inputs = form.querySelectorAll("input, select");
    inputs.forEach((input) => {
        input.addEventListener("input", function () {


            //MUDAR ISSO
            
            const progressValue = (form.checkValidity()) ? 25 : 0; // 25% de progresso por campo preenchido corretamente
            progressBar.style.width = progressValue + "%";

            // Lógica para mudar a expressão do avatar
            if (progressValue === 100) {
                avatar.src = "img/feliz.png"; // Altere para o caminho da imagem feliz
            } else if (progressValue > 0) {
                avatar.src = "img/pensativa.png"; // Altere para o caminho da imagem neutra
            } else {
                avatar.src = "img/triste.png"; // Altere para o caminho da imagem triste
            }

        });
    });
});
