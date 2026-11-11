// Funções que retornam funções, em 4 níveis
// cada () executa um nível e devolve o próximo

function retornar1 (){
    console.log('ola!');
        return function retornar2 (){
            console.log('essa é');
                return function retornar3 () {
                        console.log('uma funcao');
                            return function retorna4 (){
                                   console.log('que retorna outra!!!')
            }
        }

    }
}

// 4 pares de () = executa os 4 níveis em sequência
retornar1()()()()
