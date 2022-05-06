// 1. Exercícios de interpretação de código.

// a. Será impresso no console a a lista inteira, porque o novo array pediu:
// item, index e array.

// 2. 
// a. Será impresso no console um novo array só com os nomes do array original.

// 3.
// a. Será impresso no console um novo array só com os itens que não contém o item "Chijo" 
// do array original.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// a.
 const novoArrayA = pets.map((item) =>{
     return item.nome
 })

 console.log(novoArrayA);

 //b.
 const novoArrayB = pets.filter((item) => {
    return item.raca === "Salsicha"
 })
 
 console.log(novoArrayB)

//c.
 const novoArrayC = pets.filter((item) => {
    if (item.raca === "Poodle")
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
 })

// 2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 // a.
 const produtosNomes = produtos.map((item) =>{
    return item.nome
})
console.log(produtosNomes);

// b. Me atrapalhei...kkk
const descontoProdutos = produtos.map ((produtos) => {
    const desconto = (produtos.preco * 5) / 100
    const resultado = {
        nome: produtos.nome,
        preco: produtos.preco - desconto,
    }
})
console.log(resultado);


// c.

const produtoBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
 })
 
 console.log(produtoBebidas);


 // d.

const produtoYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
 })
console.log(produtoYpe);

// e. 

const fraseYpe = produtoYpe.map((produtos) => {
    return `Compre ${produtos.nome} por preço ${produtos.preco}`
 })

console.log(fraseYpe);

 