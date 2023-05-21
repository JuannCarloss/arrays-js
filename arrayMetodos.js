const pilotos = ['vettel','alonso','raikkonen','massa']
pilotos.pop()//remove o ultimo indice do array

pilotos.shift()//remove o primeiro indice do array
pilotos.unshift('hamilton')//atribui ao primeiro indice

//splice pode remover e adicionar

//adicionar
pilotos.splice(2, 0, 'bottas', 'massa')//2(onde inicia)0(numero de deletados, itens adicionados)


//remover
pilotos.splice(3, 1)

//slice criar um array a partir do valor passado como indice

const algunsPilotos1 = pilotos.slice(2)//a partir do segundo indice

const algunsPilotos2 = pilotos.slice(1, 4)
/*a partir do indice, vai ate o segundo valor indicado
mas não conta o ultimo valor(nesse caso apenas do 1 ao 3) */