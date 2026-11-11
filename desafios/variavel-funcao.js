//fazer um afunca q
// recebe um parametro e retorna um conceito

// converte uma nota (0 a 10) em conceito (A+, A, B+...)
function ConceitoDaNota (nota){

// Math.ceil arredonda pra CIMA (ex: 8.2 vira 9)
// o switch compara o resultado com cada case
// como cada case tem return, não precisa de break
switch (Math.ceil(nota)) {
    case 10 : return 'A+';
    case 9  : return 'A';
    case 8  : return 'B+';
    case 7  : return 'B';
    case 6  : return 'C+';
    case 5  : return 'C';
    case 4  : return 'D+';
    case 3  : return 'D';
    case 2  : return 'E+';
    case 1  : return 'E';
    case 0  : return 'F';
    default: return null; // nota fora de 0 a 10
}

}
let resultado = ConceitoDaNota(10);
console.log(`o conceito do aluno é ${resultado}.`);
