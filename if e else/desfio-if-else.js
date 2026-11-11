// Calculadora simples com if / else if

const a = 10;
const b = 28;
const operacao = "/";

let resultado;

// testa qual é a operação e faz a conta correspondente
// só entra no PRIMEIRO bloco cuja condição for verdadeira
if (operacao === '*') {
    resultado = a * b;
} else
    if ( operacao === '+' ) {
    resultado = a + b;
} else
    if (operacao === '/') {
        resultado = a / b;
} else
    if (operacao === '-') {
        resultado = a - b;
    }

 console.log (resultado);
