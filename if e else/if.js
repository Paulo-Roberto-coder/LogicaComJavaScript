// Converte nota em conceito usando if / else if

let nota = (9)

// else if testa de cima pra baixo e para no primeiro que der certo
// por isso não precisa do limite de cima: se chegou no "nota >= 7", já não é >= 9
// assim nenhuma nota fica sem conceito (ex: 6.95 vira C)
if (nota >= 9)
{
    console.log ('A');
}
else if (nota >= 7)
{
    console.log ('B');
}
else if (nota >= 5)
{
    console.log('C')
}
else if (nota >= 4.5)
{
    console.log ('D')
}
else
{
    console.log ('F')
}
