console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array ('bia', 'carlos', 'ana')
console.log(aprovados);

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'paulo'
aprovados.push('abia')//adiciona valor ao ultimo indice
console.log(aprovados.length);//mostra o tamanho do array

aprovados.sort()//organiza o array
console.log(aprovados);
