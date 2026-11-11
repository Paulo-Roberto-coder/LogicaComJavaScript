//QUERO ESSE RESULTADO

// [3, 3] [2, 2] [1,1]

let linha = '';

// conta de 3 até 1 e cola cada par no texto "linha"
for(let a = 3; a >= 1; a--)  {

        linha += `[${a}, ${a}]` ;
}

// console.log fora do loop: mostra tudo de uma vez, numa linha só
console.log(linha);
