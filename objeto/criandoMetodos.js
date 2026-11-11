// Criando métodos: dentro de um objeto e no prototype dos números

const calculo = {
     quadrado (a){      //funcao dentro de um objeto vira metodo e nao precisa da "function" so do nome parametro e a funcao em si
        return a * a ;  // número vezes ele mesmo = quadrado

    }
}

let algumValor = 10;
console.log(calculo.quadrado(algumValor)); // 100


// Number.prototype é a "pasta" onde ficam os métodos que TODO número pode usar
// colocando o método "dobro" lá, qualquer número passa a ter .dobro()
// this = o número que chamou o método (o que vem antes do ponto)
// obs: mexer no prototype do próprio JS é bom pra estudo, mas evitado em projeto real
Number.prototype.dobro = function() { // os pontos . e como se navegasse entre pastas
    console.log(this * 2);            // para criar um metodo global e preciso criar um novo nessa pasta aonde tbm esta localizado todos os metosdos de numeros, tbm tem metodos de texto e etc
}

let x = 20;

x.dobro() // 40
