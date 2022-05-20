``` javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    let valorCarros = qtdeCarrosVendidos * 100
    let valorComissao = valorTotalVendas * (5 / 100)
    let salarioFinalMes = valorCarros + valorComissao + 2000
    return salarioFinalMes                

}
```