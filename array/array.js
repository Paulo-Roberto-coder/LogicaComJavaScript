// Métodos de array: concat e join

const numeros = [0, 1, 2, 3, 4, 5];

// concat: cria um array NOVO juntando o antigo com os valores passados
// o array "numeros" continua igual
const numeros2 = numeros.concat(6,7,8);

// join: junta todos os itens num texto só, usando ' / ' como separador
const numeros3 = numeros2.join(' / ');

console.log(numeros3); // 0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8
