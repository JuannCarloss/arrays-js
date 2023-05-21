const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'maria', nota: 9.2, bolsista: true},
    {nome: 'pedro', nota: 9.8, bolsista: false},
    {nome: 'ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota));

const resultado = alunos.map(function(a){return a.nota}).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual
})

/*reduce pega o indice 0 e 1 do array, faz algo baseado
na função que eu passar e o resultado vai sendo reaplicado
percorrendo todo array, acima, é feito a soma do indice 0 e 1, 
em seguida, o resultado da soma dos dois é somado ao indice
2 do array, e assim por diante, os parametros da função
reduce são sempre dois, respectivamente indices 0 e 1 */