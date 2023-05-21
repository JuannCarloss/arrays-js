const nums = [1, 2, 3, 4, 5]

// map é um forEach com propósito, não só apenas percorre os valores

let resultado = nums.map(function(e){
    return e * 2
})//o valor x2 armazenando dentro de "resultado"

//console.log(resultado);

const soma10 = e => e + 10
const triplo = e => e * 3
const paraReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraReal)
console.log(resultado);
/*3 funções colocadas em um array só com 3 maps seguidos */