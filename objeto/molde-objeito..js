// Classe: um molde para criar vários objetos parecidos

class Carro {
    // constructor: roda sozinho a cada "new" e preenche o objeto novo
    // this = o objeto que está sendo criado agora
    constructor (marca, modelo, ano, kms){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.kms = kms;
    }

    // métodos: todo carro criado pela classe pode usar
    descrever() {
        console.log(this.marca, this.modelo, this.ano);
    }

    idade() {
        console.log('O carro tem', 2026 - this.ano, 'anos');
    }

    kilometro(){
        console.log(`kilometros rodados: ${this.kms}!`);
    }

    // muda o estado do objeto: soma os km rodados no total do carro
    rodar(x){
         this.kms += x;

    }

}

// new cria uma instância (um carro) a partir do molde
//marca, modelo, ano e kms
const sandero = new Carro ('renout', 'sandero', 2015, 89000);
const gol = new Carro ('wolksvagen', 'gol', 2002, 150000 );

console.log(gol);
gol.kilometro();

console.log(sandero);
sandero.kilometro();

// cada carro roda 10000 km
gol.rodar(10000);
sandero.rodar(10000);

// mostra de novo: os km aumentaram
console.log(gol);
gol.kilometro();

console.log(sandero);
sandero.kilometro();
