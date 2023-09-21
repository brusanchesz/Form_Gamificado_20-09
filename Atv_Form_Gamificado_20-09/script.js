
function lerFormulario(){
    let formulario = document.querySelectorAll("input")//buscando o seletor input, formulario vai receber tudo
    let espaco = document.getElementById("espaco")

    espaco.innerHTML = `Nome: ${formulario[0].value} \n
                              ${formulario[1].value} `        // pode acessar os formularios atraves de posicoes



}

