function inverso (para1){
    const tipo = typeof para1;

    if (tipo === `boolean`){
        return !para1
    }
    else if (tipo === 'number') {
        return -para1
    }
    else {
        return `booleano ou número esperado, mas o parâmetro é do tipo ${tipo}.`
    }
}

console.log(inverso(true))
console.log(inverso('6'))
console.log(inverso(-2000))
console.log(inverso('programação'))