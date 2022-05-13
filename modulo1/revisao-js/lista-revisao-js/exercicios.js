// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function ordenar(a, b){
      return (a-b)
  }  
  return array.sort(ordenar)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novoArray = []
   for (let numerosPares1 of array) {
       if (numerosPares1 % 2 === 0){
           novoArray.push(numerosPares1)
       }
   }
   return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = []
    for (let numerosPares1 of array) {
        if (numerosPares1 % 2 === 0){
            novoArray.push(numerosPares1)
        }
    }
        let numerosDobro = novoArray.map((numero) => {
            return (Math.pow(numero, 2))
        })
    return numerosDobro
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
 
    for (let i = 1; i < array.length; i++) {
       if (array[i] > maiorNumero) {
          maiorNumero = array[i]
       }
    }
    return maiorNumero
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = 0
    let menorNumero = 0
    let divisao
    if(num1 > num2){
        maiorNumero = num1
    }else {
        maiorNumero = num2
    }
    if(num1 < num2){
        menorNumero = num1
    }else {
        menorNumero = num2
    }
    if(maiorNumero % menorNumero === 0){
        divisao = true
    }else {
        divisao = false
    }
    let objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: divisao,
        diferenca: maiorNumero - menorNumero,
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const numero = []
   for (let i = 0; numero.length < n; i++) {
       if(i % 2 === 0) {
           numero.push(i)
       }
   }
   return numero
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno"
    }else if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Equilátero"
    }else if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        return "Isósceles"
    }
    
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let array2 = []
    const crescente = array.sort((item, index) =>{
        return item - index
    })
    let segundoMaiorNumero = crescente[crescente.length -2]
    let segundoMenorNumero = crescente[1]
array2.push(segundoMaiorNumero, segundoMenorNumero)
    return array2
}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}