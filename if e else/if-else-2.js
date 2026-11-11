// Saudação de acordo com a hora (if / else if / else)

const hora = 0.59;
let saudacao;

// as condições são testadas em ordem, de cima pra baixo
if (hora < 6 ) {
     saudacao = 'boa madrugada!';
} else if (hora <= 12) {
     saudacao = 'bom dia!';

}  else if  ( hora <=18 ) {
     saudacao = 'boa tarde!';
} else if (hora <= 23.59) {
     saudacao = 'boa noite!'
}
  else {
     saudacao = 'boa madrugada!';}  // se nenhuma condição acima for verdadeira




console.log (saudacao)
