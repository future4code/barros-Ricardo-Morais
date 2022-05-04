// 1. Exercícios de interpretação de código.
// Nesse código faz uma contagem de 0 a 4, e o valor é jogado dentro da váriavel "valor" que 
// soma o último número com o próximo.

// 2.

// a.
// Será impresso no console os números acima de 18 da lista.

// b. Sim, mas eu não sei como.

// 3. O resultado será, uma soma de asterístico até 4.

// 1. Exercícios de escrita de código.

// deu erro
let pet = Number(prompt("Quantos bichinhos de estimação você tem? "))
console.log(pet);

if (pet === 0) {
  console.log("Que pena! Você pode adotar um pet!");

}else {
  let c = 1
  while(c <= pet) {
    let nomePet = prompt("Quais os nomes? ")
    let listaPet = []
    listaPet += nomePet
    c++
    console.log(listapet);
  }
}


// 2. 
// a.
let arrayOriginal = [100, 91, 80, 35, 60, 50, 40, 21, 20, 10]
let c = 0 
while(c < arrayOriginal.length){
  console.log(arrayOriginal[c]);
  c++
}
// b.
for(let numeros of arrayOriginal) {
  let multiplicando = numeros * 10
  console.log(multiplicando);
}
//c.
for (let numeros of arrayOriginal) {
  if (numeros % 2 === 0) {
    novoArray = [numeros]
    console.log(novoArray);
  }
}
// d. 
for (let i = 0; i < arrayOriginal.length; i++) {
  console.log(` o elemento do index ${i} é ${arrayOriginal[i]}`);
}
// e.
function() {
  let valormaior = 0
  for (let posicao = 0; posicao < arrayOriginal.length; posicao++) {
    let indiceArray = arrayOriginal[posicao]
    if (indiceArray > valormaior) {
      valormaior = indiceArray
    }
  }

  let valormenor = valormaior
  for (let posicao = 0; posicao < arrayOriginal.length; posicao++) {
    let indiceArray = arrayOriginal[posicao]
    if (indiceArray  valormenor) {
      valormenor = indiceArray
    }
  }
  console.log(`O maior número ${maiorNumero} e o menor é ${menorNumero}`);
}

