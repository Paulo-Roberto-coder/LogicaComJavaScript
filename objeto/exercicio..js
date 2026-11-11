// Objeto com propriedades e métodos

const carro = {
    // propriedades: os dados do carro
    marca: 'fiat',
    modelo: 'uno',
    ano: 2010,

    // métodos: ações do carro
    // this = o próprio objeto (carro), por isso this.marca acessa a marca dele
    descrever: function(){
        console.log(this.marca, this.modelo, this.ano)
    },
    idade: function() {
        console.log( 'O carro tem', (2026 - this.ano),'anos')
    }
}
carro.descrever(); // fiat uno 2010
carro.idade()      // O carro tem 16 anos
