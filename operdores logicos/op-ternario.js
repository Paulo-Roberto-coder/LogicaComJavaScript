// Calculadora com ternários encadeados
// formato: condição ? seVerdadeiro : seFalso

const a = 8;
const b = 4
const operacao = '/';

// testa uma operação de cada vez; se não for, passa pro próximo ternário
// o último valor (a / b) é o padrão, caso nenhuma operação combine
const resultado = operacao === '+' ? a + b :
    operacao === '-' ? a - b :
        operacao === '/' ? a / b :
            operacao === '*' ? a * b : a / b;

console.log(resultado); // 2
