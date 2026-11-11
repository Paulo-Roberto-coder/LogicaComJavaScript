
/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.*/

// recebe um nome e devolve (return) a saudação usando template string
function comprimentar (nome){
    return `Olá, ${nome}!`;
}

console.log(comprimentar('leo'));


/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias. */

// multiplica a idade por 365 e devolve o total de dias
function converterIdade(idade) {
    const dias = idade * 365;
    return `Você tem aproximadamente: ${dias} dias de vida!`;
}

console.log(converterIdade(25));


/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e
o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é da quantidade de horas
trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído 30%, relativo a impostos. O retorno
da função deve ser a string "Salário líquido é igual a R$ X", em que X é o salário líquido do funcionário no mês. */


// salário bruto = horas x valor da hora
// salário líquido = bruto menos 30% de impostos
// devolve (return) a frase pronta
function calcularSalario(horasTrabalhadas, recebePorHora) {
    const salario = horasTrabalhadas * recebePorHora;
    const salarioLiquido = salario - (salario * 0.30);
    return `Salário líquido é igual a R$ ${salarioLiquido}`;
}

console.log(calcularSalario(150, 40.5)); // Salário líquido é igual a R$ 4252.5


/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma  string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */

// usa o array como tabela de consulta (lookup table)
// numero - 1 porque o array começa na posição 0 (janeiro = posição 0)
function nomeDoMes (numero) {
    const meses = [ 'janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return meses[numero - 1];

}

console.log(nomeDoMes(5)) // maio


/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. */

// só devolve true se os DOIS forem números (typeof) E o primeiro for maior ou igual
// sem checar o tipo, o JS converteria '0' em 0 sozinho (coerção de tipo) e daria true
function maiorOuIgual (nu1, nu2) {
    if (typeof nu1 === 'number' && typeof nu2 === 'number' && nu1 >= nu2) {
        return true;
    } else {
        return false;
    }
}
console.log(maiorOuIgual(0, 0));   // true
console.log(maiorOuIgual(0, '0')); // false
console.log(maiorOuIgual(5, 1));   // true
