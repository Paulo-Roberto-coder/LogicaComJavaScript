// Duas formas de percorrer um array: for e forEach

const lista = ['banana', 'maca', 'uva', 'pera'];

// for: o i é a POSIÇÃO (índice); lista[i] busca o item daquela posição
for (let i = 0; i < lista.length; i++) {
    console.log( lista[i]);
}

// forEach: executa a função uma vez para cada item
// o parâmetro já recebe o ITEM direto (aqui, cada fruta)
lista.forEach(function (numero) {
    console.log(numero);
});
