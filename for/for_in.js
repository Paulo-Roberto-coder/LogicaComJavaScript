// for...in: percorre as POSIÇÕES (índices) do array, não os itens
// por isso mostra 0, 1, 2, 3 em vez dos nomes

const listaConvidados = ['paulo', 'joao', 'pedro', 'maria'];
let listaVazia = '';

/*for (let caixaTemporaria in listaConvidados) {
    listaVazia += caixaTemporaria + ' ';

} console.log(listaVazia);*/

for (let caixaTemporaria in listaConvidados) {
    listaVazia = caixaTemporaria + ' ';         // atribui/substitui o valor que e passado p/ variavel a cada volta
    console.log(listaVazia);                    // mostra na tela o valor atual da variavel a cada volta e executa o console.log a cada volta
}
