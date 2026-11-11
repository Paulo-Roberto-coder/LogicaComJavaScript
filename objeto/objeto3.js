// Função fábrica (factory function): uma função que cria e devolve objetos

function criarData (nome, dia, mes, ano) {
    return {
        nome: nome,
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function(){

            return  `${this.nome}: ${this.dia}/${this.mes}/${this.ano}.`;

        }
    }
}

// cria um objeto data com: nome, dia, mês e ano (4 valores, igual aos parâmetros)
const data1 = criarData('junior', 25, 2, 2026)

console.log(typeof criarData) // mostra 'function' (o tipo da função)
console.log(data1.exibir())   // junior: 25/2/2026.
