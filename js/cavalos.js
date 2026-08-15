/* ===========================
   DADOS DOS CAVALOS
=========================== */

const cavalos = {
    imperador: {
        nome: "Imperador Prime",
        imagens: [
            "imagens/cavalos/imperador0.jpeg",
            "imagens/cavalos/imperador1.jpeg",
            "imagens/cavalos/imperador2.jpeg",
            "imagens/cavalos/imperador3.jpeg",
        ],
        raca: "Mangalarga Marchador",
        peso: "480 kg",
        idade: "7 anos",
        altura: "1,52 m",
        aptidao: "Marcha e cavalgadas",
        descricao: "O Imperador Prime é um dos principais cavalos do Haras Prime. Conhecido por sua elegância, resistência e temperamento dócil, destaca-se em provas de marcha e cavalgadas de longa distância. Sua excelente genética faz dele um dos grandes reprodutores do haras.",
        preco: "R$ 180.000"
    },

    trovao: {
        nome: "Trovão",
        imagens: [
            "imagens/cavalos/trovao (1).jpg",
            "imagens/cavalos/trovao (2).jpg",
            "imagens/cavalos/trovao (3).jpg"
        ],
        raca: "Quarto de Milha",
        peso: "520 kg",
        idade: "6 anos",
        altura: "1,58 m",
        aptidao: "Provas de tambor e velocidade",
        descricao: "Trovão é um cavalo de alta performance, reconhecido por sua velocidade, força e agilidade. Seu desempenho em competições faz dele um dos maiores destaques do Haras Prime.",
        preco: "R$ 145.000"
    },

    diamante: {
        nome: "Diamante",
        imagens: [
            "imagens/cavalos/diamante (1).jpg",
            "imagens/cavalos/diamante.jpeg"
        ],
        raca: "Puro Sangue Lusitano",
        peso: "540 kg",
        idade: "8 anos",
        altura: "1,65 m",
        aptidao: "Adestramento clássico",
        descricao: "Diamante impressiona pela beleza, postura e inteligência. Seus movimentos elegantes e seu excelente treinamento fazem dele um cavalo ideal para apresentações e competições de adestramento.",
        preco: "R$ 210.000"
    },

    estrela: {
        nome: "Estrela",
        imagens: [
            "imagens/cavalos/estrela.jpeg",
            "imagens/cavalos/estrela1.jpeg",
            "imagens/cavalos/estrela2.jpeg",
            "imagens/cavalos/estrela3.jpeg"
        ],
        raca: "Crioulo",
        peso: "450 kg",
        idade: "5 anos",
        altura: "1,45 m",
        aptidao: "Trabalho no campo e cavalgadas",
        descricao: "Estrela é uma égua dócil, resistente e muito versátil. Seu comportamento tranquilo e sua resistência tornam-na perfeita para cavalgadas, manejo rural e atividades recreativas.",
        preco: "R$ 120.000"
    },

    fenix: {
        nome: "Fênix",
        imagens: [
            "imagens/cavalos/fenix (1).jpeg",
            "imagens/cavalos/fenix (2).jpg",
            "imagens/cavalos/fenix (3).jpeg"
        ],
        raca: "Pampa",
        peso: "470 kg",
        idade: "4 anos",
        altura: "1,50 m",
        aptidao: "Exposições e treinamento",
        descricao: "Fênix é um jovem cavalo de grande potencial. Com genética selecionada e treinamento constante, destaca-se pela elegância, energia e facilidade de aprendizado, sendo uma das grandes promessas do Haras Prime.",
        preco: "R$ 95.000"
    },

    valente: {
        nome: "Valente",
        imagens: [
            "imagens/cavalos/valente (1).jpg",
            "imagens/cavalos/valente (2).jpg",
            "imagens/cavalos/valente.jpg"
        ],
        raca: "Campolina",
        peso: "620 kg",
        idade: "9 anos",
        altura: "1,62 m",
        aptidao: "Reprodução e passeios",
        descricao: "Valente é um reprodutor de excelente linhagem, conhecido por transmitir força, beleza e bom temperamento aos seus descendentes. É um dos animais mais importantes do Haras Prime.",
        preco: "R$ 265.000"
    },
    nvc: {
        nome: "NVC",
        imagens: [
            "imagens/cavalos/NVC.jpeg",
            "imagens/cavalos/NVC1.jpeg",
        ],
        raca: "NVC",
        peso: "500 kg",
        idade: "6 anos",
        altura: "1,55 m",
        aptidao: "Treinamento e exposições",
        descricao: "NVC é um cavalo de grande potencial, com genética selecionada e treinamento constante. Destaca-se pela elegância, energia e facilidade de aprendizado.",
        preco: "R$ 135.000"
    },

    apolo: {
        nome: "Apolo",
        imagens: [
            "imagens/cavalos/apolo (1).jpeg",
            "imagens/cavalos/apolo (2).jpeg",
            "imagens/cavalos/apolo (3).jpeg",
            "imagens/cavalos/apolo (4).jpg"
        ],
        raca: "Akhal-Teke",
        peso: "480 kg",
        idade: "7 anos",
        altura: "1,62 m",
        aptidao: "Adestramento e provas de resistência",
        descricao: "Cavalo elegante, atlético e muito resistente, conhecido pelo pelo com brilho metálico e pela aparência exótica.",
        preco: "R$ 160.000"
    },

    thor: {
        nome: "Thor",
        imagens: [
            "imagens/cavalos/thor (1).jpeg",
            "imagens/cavalos/thor (2).jpeg",
            "imagens/cavalos/thor (3).jpeg"
        ],
        raca: "Friesian",
        peso: "600 kg",
        idade: "9 anos",
        altura: "1,80 m",
        aptidao: "Adestramento e apresentações",
        descricao: "Cavalo de grande porte, com pelagem preta, crina longa e presença imponente. Possui movimentos elegantes.",
        preco: "R$ 220.000"
    },

    safira: {
        nome: "Safira",
        imagens: [
            "imagens/cavalos/safira (1).jpeg",
            "imagens/cavalos/safira (2).jpeg"
        ],
        raca: "Appaloosa",
        peso: "520 kg",
        idade: "6 anos",
        altura: "1,58 m",
        aptidao: "Três tambores e provas de velocidade",
        descricao: "Égua ágil e inteligente, com pelagem manchada característica da raça. Tem bastante energia e boa resposta aos comandos.",
        preco: "R$ 155.000"
    },

    dante: {
        nome: "Dante",
        imagens: [
            "imagens/cavalos/dante (1).jpeg",
            "imagens/cavalos/dante (2).jpeg"
        ],
        raca: "Gypsy Vanner",
        peso: "550 kg",
        idade: "8 anos",
        altura: "1,68 m",
        aptidao: "Passeios, apresentações e equitação",
        descricao: "Cavalo forte e dócil, conhecido pelas longas franjas nas pernas, crina abundante e pelagem marcante.",
        preco: "R$ 180.000"
    },

    zeus: {
        nome: "Zeus",
        imagens: [
            "imagens/cavalos/zeus (1).jpeg",
            "imagens/cavalos/zeus (2).jpeg",
            "imagens/cavalos/zeus (3).webp"
        ],
        raca: "Marwari",
        peso: "450 kg",
        idade: "10 anos",
        altura: "1,55 m",
        aptidao: "Enduro e equitação de resistência",
        descricao: "Cavalo de origem indiana, conhecido pelas orelhas curvadas para dentro, resistência e personalidade ativa.",
        preco: "R$ 170.000"
    }
};




/* ===========================
   VARIÁVEIS DO CARROSSEL
=========================== */
let cavaloAtual = null;
let indiceImagem = 0;


/* ===========================
   ABRIR MODAL
=========================== */
function abrirModal(cavalo) {
    cavaloAtual = cavalo;
    indiceImagem = 0;

    document.getElementById("modalNome").textContent = cavalo.nome;
    document.getElementById("modalRaca").textContent = cavalo.raca;
    document.getElementById("modalPeso").textContent = cavalo.peso;
    document.getElementById("modalIdade").textContent = cavalo.idade;
    document.getElementById("modalAltura").textContent = cavalo.altura;
    document.getElementById("modalAptidao").textContent = cavalo.aptidao;
    document.getElementById("modalDescricao").textContent = cavalo.descricao;
    document.getElementById("modalPreco").textContent = cavalo.preco;

    criarCarrossel(cavalo.imagens);

    document.getElementById("modal").classList.add("ativo");
    document.body.style.overflow = "hidden";
}


/* ===========================
   CRIAR CARROSSEL
=========================== */
function criarCarrossel(imagens) {
    const slides = document.getElementById("slides");
    const indicadores = document.getElementById("indicadores");

    slides.innerHTML = "";
    indicadores.innerHTML = "";

    imagens.forEach((imagem, indice) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");

        if (indice === 0) {
            slide.classList.add("ativo");
        }

        slide.innerHTML = `
            <img src="${imagem}" alt="${cavaloAtual.nome}">
        `;

        slides.appendChild(slide);

        const indicador = document.createElement("button");
        indicador.classList.add("indicador");

        if (indice === 0) {
            indicador.classList.add("ativo");
        }

        indicador.setAttribute("aria-label", `Ir para imagem ${indice + 1}`);

        indicador.onclick = function(event) {
            event.stopPropagation();
            irParaImagem(indice);
        };

        indicadores.appendChild(indicador);
    });
}


/* ===========================
   MOSTRAR IMAGEM
=========================== */
function mostrarImagem(indice) {
    const slides = document.querySelectorAll(".slide");
    const indicadores = document.querySelectorAll(".indicador");

    if (slides.length === 0) {
        return;
    }

    if (indice >= slides.length) {
        indice = 0;
    }

    if (indice < 0) {
        indice = slides.length - 1;
    }

    indiceImagem = indice;

    slides.forEach(slide => {
        slide.classList.remove("ativo");
    });

    indicadores.forEach(indicador => {
        indicador.classList.remove("ativo");
    });

    slides[indiceImagem].classList.add("ativo");

    if (indicadores[indiceImagem]) {
        indicadores[indiceImagem].classList.add("ativo");
    }
}


/* ===========================
   PRÓXIMA IMAGEM
=========================== */
function proximaImagem() {
    if (!cavaloAtual) {
        return;
    }

    mostrarImagem(indiceImagem + 1);
}


/* ===========================
   IMAGEM ANTERIOR
=========================== */
function imagemAnterior() {
    if (!cavaloAtual) {
        return;
    }

    mostrarImagem(indiceImagem - 1);
}


/* ===========================
   IR PARA UMA IMAGEM
=========================== */
function irParaImagem(indice) {
    mostrarImagem(indice);
}


/* ===========================
   FECHAR MODAL
=========================== */
function fecharModal() {
    document.getElementById("modal").classList.remove("ativo");
    document.body.style.overflow = "";
    cavaloAtual = null;
}


/* ===========================
   CLICAR FORA DO MODAL
=========================== */
document.getElementById("modal").addEventListener("click", function(event) {
    if (event.target === this) {
        fecharModal();
    }
});


/* ===========================
   TECLA ESC
=========================== */
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        fecharModal();
    }
});


/* ===========================
   TECLAS ← E →
=========================== */
document.addEventListener("keydown", function(event) {
    const modal = document.getElementById("modal");

    if (!modal.classList.contains("ativo")) {
        return;
    }

    if (event.key === "ArrowRight") {
        proximaImagem();
    }

    if (event.key === "ArrowLeft") {
        imagemAnterior();
    }

    if (event.key === "e") {
        proximaImagem();
    }
     if (event.key === "q") {
        imagemAnterior();
    }
});