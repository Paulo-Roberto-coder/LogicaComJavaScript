// while com condição aleatória

let a = 1
let palavra = 'olá mundo '

// Math.random() gera um número entre 0 e 1
// o loop continua enquanto sair menor que 0.99 (99% de chance a cada volta)
// a++ mostra o valor atual e depois soma 1
while (Math.random() <0.99) {
    console.log (palavra + 'pela' , a++, 'vez')
}
