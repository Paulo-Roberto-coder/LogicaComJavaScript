// =====================================================
// MULTIPLICAÇÃO SEM USAR O OPERADOR *  (versão com WHILE)
// Ideia: multiplicar é somar o mesmo número várias vezes.
// Ex.: 5 x 3 = 5 + 5 + 5
// =====================================================

// Cria uma função chamada multiplicarWhile que recebe dois números.
// num1 = quantas vezes vou somar | num2 = o número que vou somar
function multiplicarWhile(num1, num2) {

    // Acumulador: guarda o total. Começa em 0 porque ainda não somei nada.
    let resultado = 0;

    // Contador: conta quantas somas eu já fiz. Começa em 0.
    let contador = 0;

    // Enquanto o contador for menor que num1, repete o bloco.
    // Quando o contador chegar em num1, o laço para.
    while (contador < num1) {

        // Soma num2 ao total (o mesmo que resultado = resultado + num2).
        resultado += num2;

        // Aumenta o contador em 1. Sem essa linha o laço nunca pararia!
        contador++;
    }

    // O laço terminou: devolve o total.
    // Fica FORA do while, senão a função sairia na primeira volta.
    return resultado;
}

// Chama a função e mostra o resultado no terminal.
// num1 = 0 → o while nem roda (0 < 0 é falso) → retorna 0
console.log(multiplicarWhile(0, 7)); // 0

// Soma o 5 cinco vezes: 5 + 5 + 5 + 5 + 5
console.log(multiplicarWhile(5, 5)); // 25


// =====================================================
// MESMA LÓGICA, AGORA COM FOR
// O for junta numa linha só as três peças do while:
// começo do contador, condição e o aumento do contador.
// =====================================================

// Cria a função multiplicarFor.
// nume1 = quantas vezes vou somar | nume2 = o número que vou somar
function multiplicarFor(nume1, nume2) {

    // Acumulador do total, começando em 0.
    let resultado2 = 0;

    // for (começo; condição para continuar; o que muda a cada volta)
    // - let i = 0    → o contador i começa em 0
    // - i < nume1    → repete enquanto i for menor que nume1
    // - i++          → no fim de cada volta, i aumenta 1
    //                  (tem que ser o i, não o nume1, senão vira loop infinito!)
    for (let i = 0; i < nume1; i++) {

        // A cada volta, soma nume2 ao total.
        resultado2 = resultado2 + nume2;
    }

    // Laço terminou: devolve o total.
    return resultado2;
}

// Soma o 5 cinco vezes → 25
console.log(multiplicarFor(5, 5)); // 25

// nume1 = 0 → o for nem roda (0 < 0 é falso) → retorna 0
console.log(multiplicarFor(0, 7)); // 0