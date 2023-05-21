const aprovados = ['agatha','aldo','daniel','raquel']

aprovados.forEach(function(nome, indice) {
        console.log(`${indice + 1} ${nome}`);
})//nos params, primeiro sempre o valor do array, segundo o indice

const num = [2, 3]

num.forEach(function(valor){
    console.log(`${valor * valor}`);
})