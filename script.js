const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciado: "Quem era o líder da Alemanha Nazista durante a Segunda Guerra Mundial?", 
       Alternativas: [
        {
          texto: "Winston Churchill", 
          afirmação:"afirmação"
        },

        {
            texto: "Adolf Hitler", 
            afirmação:"afirmação"
        }, 
        
      ]
    }, 
    {
        enunciado: "Qual evento é considerado o estopim da Segunda Guerra Mundial na Europa?", 
        Alternativas: [
            {
                texto: "O ataque a Pearl Harbor", 
                afirmação:"afirmação"
            }, 

            {
                texto: "A invasão da Polônia pela Alemanha", 
                afirmação:"afirmação"
            }
        ]
    },
    {
        enunciado: "Qual foi o principal motivo do ataque japonês a Pearl Harbor?", 
        Alternativas: [
            {
                texto:"Conquistar território americano", 
                afirmação:"afirmação"
            }, 

            {
                texto:"Neutralizar a frota naval dos EUA no Pacífico", 
                afirmação:"afirmação"
            },
      ]
    },
    {
        enunciado: "Qual foi a batalha decisiva na Frente Oriental, onde os soviéticos conseguiram uma grande vitória sobre a Alemanha?", 
        Alternativas: [
            {
                texto:"Batalha de Stalingrado", 
                afirmação:"afirmação"
            }, 

            {
                texto:"Batalha de Dunquerque", 
                afirmação:"afirmação"
            }, 
       ]
    },
    {
        enunciado: "O que foi o Dia D?", 
        Alternativas: [
            { 
                texto:"A rendição da Alemanha",
                afirmação:"afirmação"
            },

            {
                texto:"O desembarque dos Aliados na Normandia",
                afirmação:"afirmação"
            },
       ]
    },
    {
        enunciado: "Qual país, inicialmente aliado da Alemanha, mudou de lado durante a guerra?", 
        Alternativas: [
             {
              texto:"Itália",
              afirmação:"afirmação"
             },

             {
              texto:"Japão",
              afirmação:"afirmação"
             },
       ]
    },
    {
        enunciado: "Qual cidade foi a primeira a ser atingida por uma bomba atômica?", 
        Alternativas: [
             {
              texto:"Nagasaki",
              afirmação:"afirmação"
             }, 

             {
              texto:"Hiroshima",
              afirmação:"afirmação"
             }, 
       ]
    },
    {
        enunciado: "Qual era o nome do pacto assinado entre a Alemanha e a União Soviética antes da guerra, que dividia o leste europeu?", 
        Alternativas: [
           "Pacto de Munique", 
           "Pacto de Não Agressão Germano-Soviético"
       ]
    },
    {
        enunciado: "Quem liderou o Reino Unido durante a maior parte da guerra, tornando-se um símbolo de resistência?", 
        Alternativas: [
           "Charles de Gaulle", 
           "Winston Churchill"
       ]
    },
    {
        enunciado: "Qual foi o objetivo principal do Plano Marshall após a guerra?", 
        Alternativas: [
           "Pagar as dívidas de guerra da Alemanha", 
           "Reconstruir a economia da Europa Ocidental"
       ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 1945...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();