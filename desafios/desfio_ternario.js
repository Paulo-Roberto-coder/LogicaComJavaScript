// Operador ternário: condição ? valorSeVerdadeiro : valorSeFalso

let prima = 10;
let secund = 4;
let terci = 10;

// compara CADA um com terci: os dois precisam ser menores ou iguais a ele
const resultado = prima <= terci && secund <= terci ? 'menor ou igual terci' : 'maior que terci';
console.log(resultado);
