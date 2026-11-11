// Currying na prática: criar funções de desconto prontas

// recebe a porcentagem e DEVOLVE uma função nova
// essa função nova "lembra" a porcentagem e só espera o valor do produto
function descontoPorPorcentagem (porcentagem) {
    return function calculoDescontoPercentual (valorDoProduto){
        return valorDoProduto - (valorDoProduto * porcentagem / 100);
    };
}

// cada variável guarda uma função de desconto já configurada
const desconto50PorCento = descontoPorPorcentagem(50);
const desconto30PorCento = descontoPorPorcentagem(30);

console.log(desconto50PorCento(1000)); // 500
console.log(desconto30PorCento(1000)); // 700
