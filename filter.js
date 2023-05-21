const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

const filtroPreco = function(p){
    return p.preco > 2000
}

const filtroFragil = function(p){
    return p.fragil = true
}

console.log(produtos.filter(filtroPreco).filter(filtroFragil));