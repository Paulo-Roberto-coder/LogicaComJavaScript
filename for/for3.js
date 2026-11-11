// Loop dentro de loop (loop aninhado)
// resultado: uma "tabela" 3x3 de pares [a, b]

for(let a = 1; a <=3; a++) {      // loop de fora: controla a LINHA
    let linha = '';                // zera o texto no começo de cada linha
    for(let b = 1; b <= 3; b++) {  // loop de dentro: roda 3 vezes pra cada volta do de fora
    linha += `[${a}, ${b}]`;
    }
      console.log (linha)          // mostra a linha pronta antes de passar pra próxima
}
