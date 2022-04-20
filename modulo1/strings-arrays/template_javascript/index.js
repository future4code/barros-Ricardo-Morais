// 1. Exercício de interpretação de código.

// a. array

// b. null

// c. 11

// d. 3

// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// f. Essa eu tive que executar o código deu 9, mas eu não entendi.

// 2.

// SUBI NUM ÔNIBUS EM MIRROCOS 27

// 1. Exercícios de escrita de código.

let nome = prompt("Qual o seu nome? ")
let email = prompt("Qual o seu email? ")
console.log(`O email ${email} foi cadastrado com sucesso. 
Seja bem vindo(a) ${nome}!`);

// 2.

let comidas = ["Feijoada", "Galinha com Quiabo", "Macarrão", "Estrogonofe", "Fraldinha Assada"]
console.log(comidas);
console.log(`Essas são mihas comidas preferidas:
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`);
let comidasUsuário = prompt("Qual a sua comida preferida? ")
comidas[1] = comidasUsuário
console.log(comidas);

// 3. 
let listaDeTarefas = ["", "", ""]
let tarefa1 = prompt("Qual a sua primeira tarefa? ")
let tarefa2 = prompt("Qual a sua segunda tarefa? ")
let tarefa3 = prompt("Qual a sua terceira tarefa? ")
listaDeTarefas = [tarefa1, tarefa2, tarefa3]
console.log(listaDeTarefas);
itemRemovido =  prompt("Você quer remover o item: 0, 1, ou 2?")
listaDeTarefas.splice(itemRemovido, 1)
console.log(listaDeTarefas);
