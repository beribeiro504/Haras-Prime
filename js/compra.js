document.addEventListener("DOMContentLoaded", function() {

    const selecaoCavalo = document.getElementById("cavalo");
    const previewCavalo = document.getElementById("previewCavalo");
    const imagemCavalo = document.getElementById("imagemCavalo");
    const nomeCavalo = document.getElementById("nomeCavalo");
    const precoCavalo = document.getElementById("precoCavalo");

    const anterior = document.getElementById("anterior");
    const proximo = document.getElementById("proximo");
    const indicadores = document.getElementById("indicadores");

    let cavaloSelecionado = null;
    let indiceImagem = 0;


    /* Escolher cavalo */
    selecaoCavalo.addEventListener("change", function() {

        cavaloSelecionado = cavalos[this.value];

        if (!cavaloSelecionado) {
            previewCavalo.style.display = "none";
            precoCavalo.textContent = "";
            return;
        }

        previewCavalo.style.display = "block";
        indiceImagem = 0;
        nomeCavalo.textContent = cavaloSelecionado.nome;
        precoCavalo.textContent = cavaloSelecionado.preco;

        criarIndicadores();
        mostrarImagem();

        // Tira o foco do select para as setas não mudarem o cavalo
        this.blur();
    });


    /* Mostrar imagem */
    function mostrarImagem() {
        if (!cavaloSelecionado) {
            return;
        }

        imagemCavalo.src = cavaloSelecionado.imagens[indiceImagem];

        const botoes = document.querySelectorAll(".indicador");

        botoes.forEach((botao, indice) => {
            botao.classList.toggle(
                "ativo",
                indice === indiceImagem
            );
        });
    }


    /* Criar indicadores */
    function criarIndicadores() {
        indicadores.innerHTML = "";

        cavaloSelecionado.imagens.forEach(function(imagem, indice) {
            const indicador = document.createElement("button");
            indicador.type = "button";
            indicador.classList.add("indicador");

            if (indice === 0) {
                indicador.classList.add("ativo");
            }

            indicador.addEventListener("click", function() {
                indiceImagem = indice;
                mostrarImagem();
            });

            indicadores.appendChild(indicador);
        });
    }


    /* Próxima imagem */
    proximo.addEventListener("click", function() {
        if (!cavaloSelecionado) {
            return;
        }

        indiceImagem++;

        if (indiceImagem >= cavaloSelecionado.imagens.length) {
            indiceImagem = 0;
        }

        mostrarImagem();
    });


    /* Imagem anterior */
    anterior.addEventListener("click", function() {
        if (!cavaloSelecionado) {
            return;
        }

        indiceImagem--;

        if (indiceImagem < 0) {
            indiceImagem = cavaloSelecionado.imagens.length - 1;
        }

        mostrarImagem();
    });


    
    document.addEventListener("keydown", function(event) {
        // Se nenhum cavalo estiver selecionado, ignora as teclas
        if (!cavaloSelecionado) return;

        if (event.key === "ArrowRight") {
            proximo.click(); // Simula um clique no botão Próximo
        } else if (event.key === "ArrowLeft") {
            anterior.click(); // Simula um clique no botão Anterior
        }
         if (event.key === "e") {
            proximo.click(); // Simula um clique no botão Próximo
            } else if (event.key === "q") {
            anterior.click(); // Simula um clique no botão Anterior
        }
        
    });

});