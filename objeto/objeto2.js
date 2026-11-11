// Objeto data com método que mostra a data formatada

const data = {
    dia: 25,
    mes: 5,
    ano: 2001,

    // usa this pra pegar as propriedades do próprio objeto
    metodo: function () {
        console.log(`${this.dia}/${this.mes}/${this.ano}`)
    }
}
data.metodo() // 25/5/2001
