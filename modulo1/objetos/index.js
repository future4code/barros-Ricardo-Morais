// 1. Exercícios de interpretação de código.

// a.

// Matheus Nachtergaele
// Virginia Cavendish
// Globo 14h

// 2.

// a.

// nome: Juca, idade: 3, raca: SRD / Esses são os dados do cachorro.
// nome: Juba, idade: 3, raca: SRD / Esses são os dados do gato, com uma alteração do nome. Sem alterar os dados do cachorro.
// nome: Jubo, idade: 3, raca: SRD / Esses são os dados da tartaruga, copiados do gato, trocando todas as letras "a" do nome para "o". 
// Sem alterar os dados do gato.

// b.

// os três pontos servem para copiar os dados do objeto, sem alterá-lo.

// 3. 

// a. e b.

// false. Porque na linha backender está definido que é false.
// indefinido. Porque não exite a característica relacionada a altura.

// 1.Exercícios de escrita de código.

// a. b.

const pessoa = {
    nome : "Ricardo",
    apelidos : ["Ricardinho ", "Ricardão ", "Rick "]
}
function objeto() {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos} `);
}
objeto()

const segundaPessoa = {
    ...pessoa,
}
segundaPessoa.apelidos = ["Riquinho", "Riquizinho", "RIRI"]


console.log(objeto(segundaPessoa));

const objeto1 = {
    nome: "Ricardo",
    idade: 33,
    profissão: "Taxista"
}

const objeto2 = {
    nome: "Janaina",
    idade: 36,
    profissão: "caixa"

function entregarArray(obj1, obj2) {
    let arrayDeRetorno = [obj1.nome, obj1.nome.length, obj1.idade, obj1.profissão, obj1.profissão.length,
        obj2.nome, obj2.nome.length, obj2.idade, obj2.profissão, obj2.profissão.length]

    return arrayDeRetorno
    }


console.log(entregarArray(objeto1, objeto2));


// 3.

let fruta1 = {
    nome: "Abacate",
    disponibilidade: false
}

let fruta2 = {
    nome: "Banana",
    disponibilidade: false
}

let fruta3 = {
    nome: "Pera",
    disponibilidade: false
}

function escolherFruta(fruta) {
    carrinho.push(fruta)
}

escollherFruta(fruta1)
escollherFruta(fruta2)
escollherFruta(fruta3)

console.log(carrinho);