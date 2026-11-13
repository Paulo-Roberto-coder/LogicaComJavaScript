// Recebe um booleano ou número e retorna o inverso dele
function inverso(para1) {
    // Descobre o tipo do valor recebido
    const tipo = typeof para1;

    // Se for booleano, inverte (true vira false e vice-versa)
    if (tipo === `boolean`) {
        return !para1;
    }
    // Se for número, troca o sinal
    else if (tipo === 'number') {
        return -para1;
    }
    // Para qualquer outro tipo, avisa o que era esperado
    else {
        return `booleano ou número esperado, mas o parâmetro é do tipo ${tipo}.`;
    }
}

// Testes da função:
console.log(inverso(true));          // false
console.log(inverso('6'));           // Erro: '6' está entre aspas, então é texto (string)
console.log(inverso(-2000));         // 2000
console.log(inverso('programação')); // Erro: recebeu texto em vez de número ou booleano
