// Função como parâmetro: passar uma função para outra função executar

// param1 e param2 recebem FUNÇÕES; a função "calcular" executa as duas
function calcular(mostrar, param1, param2) {
    if (mostrar === 'function') {
        param1();   // executa a primeira função recebida
        param2();   // executa a segunda
    }
}

function name() {
    console.log('Meu nome é paulo!');
}

function id() {
    console.log('Tenho 25 anos de idade!');
}

// passa as funções SEM parênteses: entrega a função, não o resultado dela
calcular('function', name, id);
