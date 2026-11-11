
// passar o cod do desfio-geral para outra estrutura de cod
// com funcoes

// cada função checa UMA condição, mostra uma mensagem e devolve true ou false

// espessura precisa estar entre 15 e 25 (incluindo os dois)
function espessura (faixa) {
    if (faixa >= 15 && faixa <=25) {
        console.log('espessura dentro da faixa!');
        return true;

    } else {console.log('espessura fora da faixa!');
        return false; }

}

// precisa ter ferramenta disponível
function ferramenta (temferramenta) {
    if (temferramenta === true) {
        console.log('ferramenta ok!');
        return true;

    } else {console.log('sem ferramenta!');
        return false; }
}

// precisa ter pelo menos 1 item no estoque
function estoque (quatidade){
    if (quatidade >= 1) {
        console.log('estoque ok!');
        return true;

    } else {console.log('nao tem estoque!');
      return false; }
}


// guarda o resultado de cada checagem numa variável
// e só libera o corte se as três forem verdadeiras (&&)
{let check_espessura = espessura(16);
let check_ferramenta = ferramenta(true);
let check_estoque = estoque(10); // passa a quantidade em estoque

if (check_espessura && check_estoque && check_ferramenta === true) {
    console.log('PODE CORTAR!');

} else { console.log('NÃO PODE CORTAR!');}

}
