// Função que cria uma lista com o mesmo elemento repetido várias vezes.
// elemento = o que vai ser repetido | numero = quantas vezes
function repetir(elemento, numero) {

    // Cria a lista dentro da função, então cada chamada começa com uma lista nova.
    // Fica antes do for porque só precisa ser criada uma vez.
    let listaVazia = [];

    // Repete "numero" vezes: o i começa em 0 e para quando chega em numero.
    for (let i = 0; i < numero; i++) {

        // push adiciona o elemento no final da lista.
        // Não usa += porque o + transformaria a lista em texto.
        listaVazia.push(elemento);
    }

    // Fora do for: só devolve depois de todas as voltas.
    // Sem esse return, o console.log de fora mostraria undefined.
    return listaVazia;
}

// Mostra no terminal o que a função devolveu.
console.log(repetir('codigo', 3)); // [ 'codigo', 'codigo', 'codigo' ]