// Trocar o valor de duas variáveis (destructuring)

let a = 7
let b = 94

let c = a; // o ; aqui é obrigatório: sem ele o JS junta essa linha com a de baixo e a troca não acontece

// [a, b] = [b, a] troca os valores: a recebe o de b, e b recebe o de a
[a, b] = [b, a]
console.log("esse e o valor de a: " + a)
console.log("esse e o valor de b: " + b)
