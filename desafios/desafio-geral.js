// Desafio: decidir se uma peça pode ser cortada

let espessura = 15;
let temFerramenta = true;
let estoqueOk = false;

// condicao p/ pode cortar
// A espessura deve ser maior ou igual a 15mm E menor ou igual a 25mm
//E precisa ter ferramenta disponível
//E precisa ter estoque suficiente


// checa se a espessura está na faixa: maior ou igual a 15 E menor ou igual a 25
if (espessura >= 15 && espessura <= 25) {
    console.log('dentro da faixa.');

} else {console.log('fora da faixa.');}

// checa a ferramenta
if ( temFerramenta=== true) {
    console.log('ferramenta ok.');
}

// checa o estoque
if (estoqueOk=== true) {
    console.log('consta no estoque.')
} else {console.log('não consta no etoque.'); }

// só pode cortar se TODAS as condições forem verdadeiras (&&)
if (espessura >= 15 && espessura <= 25 && temFerramenta === true && estoqueOk === true ) {
    console.log('PODE CORTAR.');
} else{ console.log('NÃO PODE CORTAR.'); }
