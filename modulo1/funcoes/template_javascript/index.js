// Exercícios de interpretação de código

// a. 10 e 50.

// b. Ele faria o cáculo correto, porém não exibiria o seu resultado.

// 2.

// a. Essa função coloca o texto do usuário em letra minúscula, e pesquisa 
// se no texto contém a palavra  "cenoura". Não importa se o usuário digitar 
// maiúsculo ou minúsculo.

// b. 
// i. true
// ii. true
// iii. true
// toda vez que tiver a palavra "cenoura" maíusculo ou minúsculo a respota do 
// console será "true".

// 1. Exercícios de escrita de código

function minhasInformacoes() {
    console.log("Eu sou Ricardo, tenho 33 anos, moro em São Paulo e sou estudante")
    }
minhasInformacoes()

function outrasInformacoes(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}`)
}
outrasInformacoes("Janaina", 36, "São Paulo", "caixa") 

// 2. 

// a.
function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(5, 13));

// b.
function soma(n1, n2) {
    return n1 > n2
}
console.log(soma(5, 13));

// c.
function soma(n1) {
    return n1 % 2 === 0 
}
console.log(soma(4));

// d.

function mensagem() {
    console.log("A Vida é bela".length)
    console.log("A Vida é bela".toUpperCase())
}
mensagem()

// 3. 

function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(30, 3))

function subtracao(n1, n2) {
    return n1 - n2
}

console.log(subtracao(30, 3))

function multiplicacao(n1, n2) {
    return n1 * n2
}

console.log(multiplicacao(30, 3))

function divisao(n1, n2) {
    return n1 / n2
}

console.log(divisao(30, 3))

let n1Usuario = Number(prompt("Digite o primeiro número: "))
let n2Usuario =  Number(prompt("Digite o segundo número: "))

console.log(soma(n1Usuario, n2Usuario))
console.log(subtracao(n1Usuario, n2Usuario))
console.log(multiplicacao(n1Usuario, n2Usuario))
console.log(divisao(n1Usuario, n2Usuario))



































