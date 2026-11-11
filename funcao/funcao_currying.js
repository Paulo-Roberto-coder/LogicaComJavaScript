// Currying: transformar uma função de vários parâmetros
// em várias funções de um parâmetro só, uma dentro da outra

//funcao normal: recebe os dois de uma vez
function multiplica (param1, param2){
    return param1 * param2;

}
console.log(multiplica (2,10)); // 20

// a mesma com currying: recebe um, devolve uma função que recebe o outro
function vezes (param1){
    return function nivel2 (param2) {
        return param1 * param2;
    };
}

// multPor10 vira uma função que sempre multiplica por 10
const multPor10 = vezes (10);
console.log(multPor10(4)); // 40
