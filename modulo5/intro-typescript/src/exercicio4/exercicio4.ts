function comparaDoisNumeros(num1: Number, num2:Number){
    let maiorNumero: any
    let menorNumero: any
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }