validacao = ""
let jaMarcados = []
let timeX = []
let timeO = []


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
    let marcar = document.getElementById("marcar-" + id)
    let erro = document.getElementById('erro')
    let numero = numeroAleatorio()
    let possibilidades =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    
      

    if (jaMarcados.includes(id)) {
        alert("ja foi marcado essa")
    } else {
        if (validacao == "o") {
            marcar.innerHTML = '<img class="marcar" src="img/o.png" disable>'
            timeO.push(id)
            jaMarcados.push(id)

            for(let i = 0; i < 8; i++){
                let possibilidadesVencer = possibilidades[i]
                verificar = 0

                for(let m = 0; m < 3; m++){
                    let verificarGanhar = possibilidadesVencer[m]

                    if(timeO.includes(verificarGanhar)){
                        verificar++

                        if(verificar == 3){
                            alert("ganhou")
                            
                        }
                    }
                }
                
                    
                
            }

            if(jaMarcados.length < 8){
                while (jaMarcados.includes(numero) || marcar == numero) {
                    numero = numeroAleatorio()
    
                }
    
                let marcarComputador = document.getElementById("marcar-" + numero)
                marcarComputador.innerHTML = '<img class="marcar" src="img/x.png" >'
                jaMarcados.push(numero)
                timeX.push(numero)
    
            }
        } else {
            marcar.innerHTML = '<img class="marcar" src="img/x.png" >'
            jaMarcados.push(id)

            if(jaMarcados.length < 8){
                while (jaMarcados.includes(numero) || marcar == numero) {
                    numero = numeroAleatorio()
    
                }
    
                let marcarComputador = document.getElementById("marcar-" + numero)
                marcarComputador.innerHTML = '<img class="marcar" src="img/x.png" >'
                jaMarcados.push(numero)
            }
        }
    }
}

function numeroAleatorio() {
    return Math.floor(Math.random() * 9)
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
            '<button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(0)" id="marcar-0" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(1)" id="marcar-1" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(2)" id="marcar-2" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(3)" id="marcar-3" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(4)" id="marcar-4" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(5)" id="marcar-5" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(6)" id="marcar-6" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(7)" id="marcar-7" ></button><button type="image" class="marcar" src="img/branco.avif" onclick="jogoDaVelha(8)" id="marcar-8" ></button>'

        statusgame.innerHTML =
            '<div class="numero-vitorias"><img src="img/trofeu.jpg" class="img-vitoria"><strong class="texto-vitoria">0</strong></div><div class="numero-derrotas"><img src="img/derrotas.webp" class="img-derrota"><strong class="texto-derrota">0</strong></div>'
    }
}