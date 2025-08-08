const caixaPrincipal = document. querySelector (".caixaPrincipal");
const caixaPerguntas = document. querySelector (".caixaPerguntas");
const caixaAlternativas = document. querySelector (".caixaAlternativas");
const caixaResultado = document. querySelector (".caixaResultado");
const textoResultado = document. querySelector (".textoResultado");

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
           "Batalha de Stalingrado", 
           "Batalha de Dunquerque"
       ]
    },
    {
        enunciado: "O que foi o Dia D?", 
        Alternativas: [
           "A rendição da Alemanha", 
           "O desembarque dos Aliados na Normandia"
       ]
    },
    {
        enunciado: "Qual país, inicialmente aliado da Alemanha, mudou de lado durante a guerra?", 
        Alternativas: [
           "Itália", 
           "Japão"
       ]
    },
    {
        enunciado: "Qual cidade foi a primeira a ser atingida por uma bomba atômica?", 
        Alternativas: [
           "Nagasaki", 
           "Hiroshima"
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
let pergutnaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();