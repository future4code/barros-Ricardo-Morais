
const arrNasc: string = "" 
const anoNasc: string = ""
const mesNasc: string = ""
const diaNasc: string = ""
function dados (nome: string, nascimento: string) {
    nome = "Ricardo"
    nascimento = "03/06/1988"
    return {
        
        arrNasc: {
            diaNasc: nascimento.split("/")[0],
            mesNasc: nascimento.split("/")[1], 
            anoNasc: nascimento.split("/")[2]
        }         
    }
}
console.log(diaNasc, mesNasc);



