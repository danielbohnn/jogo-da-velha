validacao = ""
function selecionarX() {
    let selecionar = document.getElementById("selecionar")

    selecionar.innerHTML = '<button onclick="selecionarO()" id="selecionar-o"><img src="img/o.png" class="img-ox"></button>' + '<button onclick="selecionarO()" id="selecionar-o"><img src="img/x-selecionado.png" class="img-ox"></button>'
    validacao = 'x'
}

function selecionarO() {
    let selecionar = document.getElementById("selecionar")

    selecionar.innerHTML = '<button onclick="selecionarO()" id="selecionar-o"><img src="img/o-selecionado.png" class="img-ox"></button>' + '<button onclick="selecionarX()" id="selecionar-x"><img src="img/x.png" class="img-ox"></button>'
    validacao = 'o'

}

function jogoDaVelha(id) {
    
}

function numeroAleatorio(){
    return Math.floor(Math.random() * 10)
}

function jogar() {
    let jogoDaVelha = document.getElementById("jogo-da-velha")
    let subtitulo = document.getElementById("subtitulo")
    let selecionar = document.getElementById("selecionar")
    let botao = document.getElementById('div-jogar')
    let statusgame = document.getElementById('status-game')

    if (validacao == '') {
        Swal.fire({
            title: "Você tem que selecionar qual você quer ser.",
            icon: "error",
        })
    } else {
        var pa = selecionar ? selecionar.parentNode : null;

        if (pa) {
            pa.removeChild(selecionar);
            pa.removeChild(subtitulo);
            pa.removeChild(botao)
        }

        jogoDaVelha.innerHTML =
            '<button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(1)" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(2)" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(3)" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(4)" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(5)" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(6)" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(7)" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(8)" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(9)" ></button>'
        
        statusgame.innerHTML =
            '<div class="numero-vitorias"><img src="img/trofeu.jpg" class="img-vitoria"><strong class="texto-vitoria">0</strong></div><div class="numero-derrotas"><img src="img/derrotas.webp" class="img-derrota"><strong class="texto-derrota">0</strong></div>'
    }
}