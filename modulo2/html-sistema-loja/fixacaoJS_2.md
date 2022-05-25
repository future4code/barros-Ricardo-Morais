```javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
 if(quantidade < 12){
        calculaPrecoTotal = quantidade * 1.3
        return calculaPrecoTotal
    }else if(quantidade >= 12) {
        calculaPrecoTotal = quantidade * 1
        return calculaPrecoTotal
    }
}
```