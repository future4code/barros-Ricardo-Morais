enum SETORES {
    MARKETING= "marketing",
    FINANCEIRO= "financeiro",
    VENDAS= "vendas"

} 

type Colaboradores = {
    nome: string
}

const data: any = [
    { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

function selecaoFuncionarios (data: any){
    const newData: any = data.filter((novoCola: { setor: string; presencial: boolean }) => novoCola.setor == "marketing" && novoCola.presencial === true)
    return newData
}     

console.log(selecaoFuncionarios(data));

/// Não consegui usar o enum e o type nesse eercício!




   
   

