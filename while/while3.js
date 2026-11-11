// while baseado em tempo: conta quantas voltas o loop dá em 5 segundos

const futuro = Date.now() + 5000; // a data atual e contada em milisegundos; + 5000 = daqui 5 segundos
let quantidade = 0;

while (Date.now() < futuro ) {  //executa o while inumeras vezes ate q a data atual seja maior ou igual o futuro
    quantidade++;
}

console.log( 'a funcao "while" foi exectada um total de ' + quantidade, 'vezes' );
