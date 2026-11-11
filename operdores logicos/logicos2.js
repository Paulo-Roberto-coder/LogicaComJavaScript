// Operadores lógicos: decidir se vai trabalhar

let dinheiro_passagem = true;
let esta_chovendo = true;
let mochila_pronta = true;

let resultado = "vai trabalhar? ";

// só vai se: tem dinheiro E NÃO está chovendo E a mochila está pronta
// !esta_chovendo inverte o valor (true vira false)
// o += cola o resultado (true/false) no final do texto
console.log(resultado += dinheiro_passagem && !esta_chovendo && mochila_pronta)
