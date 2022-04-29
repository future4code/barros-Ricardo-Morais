// 1. exercícios de interpretação de código.

// a. O código pedi um número ao usuário e verifica se o resto da divisão dele por dois é igual a 0.
// Esse código serve para identificar se o número digitado é par, ou ímpar.

// b. Ele imprime no console "Passou no teste", só números par.

// b. Ele imprime no console "Não passou no teste", só números ímpares.

// 2.

// a. O código serve para mostrar o preço das frutas.

// b. 2.25

// c. Ele iria substituir a variável preço. Preço seria substituído de 5.5 para 5.

// 3.

// a. A primeira linha serve para o usuário digitar um número que será colocado na variável numero.

// b. Se digitar 10 vai aparecer "Esse número passou no teste", Se digitar - 10 não aparece nada,
// porque essa é uma estrutura condicional simples, ou seja, não tem ELSE.

// Sim, tem um erro no console. O console.log(mensagem) está no escopo global, ele tem que está no escopo local.

// 1. Exercícios de escrita de código.

const idade = Number(prompt("Qual é a sua idade? "))

if (idade >= 18) {
   console.log("Você pode dirigir");
} else console.log("Você não pode dirigir");

// 2.

let turno = prompt(`Em qual turno você estuda? Matutino (M), 
Vespertino (V), ou Noturno (N) `)
if (turno === "M") {
    console.log("Bom dia");
    
}else if (turno === "V") {
        console.log("Boa tarde");
    } 
else if (turno === "N")
        console.log("Boa noite");       


// 3.

let turno2 = prompt(`Em qual turno você estuda? Matutino (M), 
Vespertino (V), ou Noturno (N) `)

switch(turno2) {
    case "M":
        console.log("Bom dia");
    break
    case "V":
        console.log("Boa tarde");
    break
    case "N":
        console.log("Boa noite");
    break
    default:
    break
}


//4. 

let genero = prompt("Qual o gênero do filme? ")
let ingresso = prompt("Qual o valor do ingresso? ")

if (genero === "fantasia" && ingresso <= 15) {
    console.log("Bom filme");
}
else 
console.log("Escolha outro filme.");


