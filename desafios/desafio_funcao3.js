// Média das duas maiores notas (descarta a menor)

let mat = 6;
let pot = 4;
let ing = 3;

// devolve o menor de dois números (usando operador ternário)
function minimo (p1, p2) {
    return p1 <= p2 ? p1 : p2;
}

// acha a menor nota e faz a média das outras duas
function media (p1, p2, p3) {
    // compara p2 com p3, depois o menor deles com p1
    const menorNota = minimo (p1, minimo(p2, p3));

    if(menorNota === p1 ) {
        return (p2 + p3) / 2;
    } else if (menorNota === p2 ){
        return (p1 + p3) / 2;
    } else { return (p1 +p2) / 2   }

}

// guarda a FUNÇÃO media numa variável (sem parênteses, não executa ainda)
const resultado = media;
console.log(resultado(mat, pot, ing)); // 5 → média de 6 e 4
