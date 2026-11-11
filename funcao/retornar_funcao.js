
//retornar funcao

function retornar () {

    function bomDia () { //funcao dentro de funcao
        return 'bom dia!!!' /// essa funcao retorna um texto
    }
    return bomDia; // a funcao 'retornar' retorna a funcao 'bomDia' que retorna texto
}

console.log(retornar); //mostra q e uma funcao q se chama retornar
console.log(retornar()); //retornar() executa retornar e mostra o que ela devolveu, que é a função bomDia
console.log(retornar()()) // chama a funcao bomDia
