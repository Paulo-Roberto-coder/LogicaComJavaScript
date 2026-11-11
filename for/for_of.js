// for...of: percorre os ITENS do array direto (diferente do for...in, que dá as posições)

const listaConvidados = ['paulo', 'joao', 'felipe', 'andre', 'caio'];
let valores = '';

/*for (let convidado of listaConvidados) {
    valores += convidado + ' ';
    console.log(valores);                          // console.log está dentro do loop, então roda a cada volta,
}                                                  // e valores acumula (nunca é esvaziado). Cada linha mostra tudo que já foi colado até aquela volta

for (let convidado of listaConvidados) {
    valores += convidado + ' ';

} console.log(valores);  */                           //cosole.log fora do loop espera o loop acabar
                                                     // dps mostra tudo de uma vez só em uma unica linha pois console.log so foi chamado uma vez



for (let convidado of listaConvidados) {
    console.log(convidado);                          // nao acrescenta item á variavel somente atribui ou substitui
}                                                   // a variavel 'convidado' e esvaziada a cada volta por um item dps do outro
