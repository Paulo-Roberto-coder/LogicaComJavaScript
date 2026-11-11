// Objeto com método que calcula o preço com desconto

const meucarro = {
    marca: 'ford',
    cor: 'verde',
    preco: 50000,
    desconto: 0.50,   // 50%

    // (1 - desconto) = quanto sobra do preço; aqui 0.5, ou seja, metade
    precoComDeconto : function () {
        return this.preco * (1 - this.desconto )
    }
}
console.log(meucarro.precoComDeconto()) // 25000
