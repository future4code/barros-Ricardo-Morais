// 1. Exercícios de interpretação de código.

// a. false

// b. false

// c. true

// d. boolean

// 2. Exercício
// O erro está no prompt, ele só reconhece uma string. 

// 3. O certo seria colocar o Number antes dele assim:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

// 1. Exercício de escrita de código.

let idade = Number(prompt("Qual a sua idade? "))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo? "))
let maisVelho = idade > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo? ", idade > idadeAmigo)
let diferençaDeIdade = idade - idadeAmigo
console.log("A diferença de idade é ", diferençaDeIdade)

// 2. Exercício

let idade = Number(prompt("Qual a sua idade? "))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo? "))
let maisVelho = idade > idadeAmigo
const diferençaIdade = 
console.log("Sua idade é maior do que a do seu melhor amigo", idade > idadeAmigo)

// c) Sempre sobra 0.

// d) Se digitar um número ímpar sobrará sempre 1.

// 3. Exercício

let idade = Number(prompt("Quantos anos de idade você tem? "))
let meses = idade * 12
let dias = meses * 365
let horas = dias * 24
console.log(`sua idade em meses é ${meses} `)
console.log(`sua idade em dias é ${dias}`)
console.log(`sua idade em horas é ${horas} `)

// 4. Exercício

const n1 = Number(prompt("Digite o primero número"))
const n2 = Number(prompt("Digite o segundo número"))
const primeiroMaior = n1 > n2
const primeiroIgual = n1 == n2
const primeiroDivisivel = n1 % n2 == 0
const segundoDivisivel = n2 % n1  == 0
console.log(primeiroMaior)
console.log(primeiroIgual)
console.log(primeiroDivisivel)
console.log(segundoDivisivel)






