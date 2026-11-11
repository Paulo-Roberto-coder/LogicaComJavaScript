// op logico com op de comparacao

let pipoca = true;
let oleo = false;
let sal = true;
let bebida = null; // valor vazio


console.log (pipoca && oleo && sal);  // && (E): só true se TODOS forem true → false
console.log (pipoca || oleo || sal);  // || (OU): true se PELO MENOS UM for true → true
console.log (!pipoca, !oleo, !sal);   // ! (NÃO): inverte cada valor → false true false
console.log (  bebida ?? "coca" );  /*se n tem valor a esquerda
do "??" (null ou undefined) usa o valor da direita*/
