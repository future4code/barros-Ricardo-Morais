// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
   //implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  let alt = Number(prompt("Digite a altura: "))
  let larg = Number(prompt("Digite a largura: "))
  let area = alt * larg

  console.log(area)
}
// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento ) {
  let anoAtual2 = Number(prompt("Qual o ano atual? "))
  let anoNascimento2 = Number(prompt("Em que ano você nasceu? "))
  let idade = anoAtual2 - anoNascimento2

  console.log(idade); 
}
 

// EXERCÍCIO 03

function calculaIMC(peso, altura) {
  const peso = Number(prompt("Qual o seu peso?"))
  const altura = Number(prompt("Qual a sua altura?"))
  const imc = peso / (altura * altura)
  console.log(imc);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  nome = prompt("Qual é o seu nome? ")
  idade = Number(prompt("Qual a sua idade? "))
  email = prompt("Qual o seu email? ")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email} `);
}
imprimeInformacoesUsuario()


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  cor1 = prompt('Digite a primeira cor: ')
  cor2 = prompt('Digite a sugunda cor: ')
  cor3 = prompt('Digite a terceira cor: ')
  return [" "]
}
console.log(imprimeTresCoresFavoritas()[0, 2])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula() {
  console.log("oi".toUpperCase());
}
retornaPrimeiroElemento()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}