/// 1-

/// A- Tipos strings não aceita números, aparece essa mensagem:
/// O tipo 'number' não pode ser atribuído ao tipo 'string'.
/// const minhaString: string = 34

/// B-

/// let meuNumero: Number | string = 34
/// meuNumero = "Ricardo"
/// console.log(meuNumero);

/// C-

/*
type Pessoas = {
    nome: string,
    idade: Number,
    corFavorita: string
}

const pessoa1: Pessoas = {
    nome: "Ricardo",
    idade: 34,
    corFavorita: "Cinza"
}

const pessoa2: Pessoas = {
    nome: "Janaina",
    idade: 36,
    corFavorita: "Cinza"
}

const pessoa3: Pessoas = {
    nome: "Maya",
    idade: 1,
    corFavorita: "Rosa"
}

console.log(pessoa1, pessoa2, pessoa3,) */

/// D-


enum CoresArcoIres {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL =  "azul",
    AZUL_ESCURO = "azul-escuro",
    VIOLETA = "violeta"
}


type Pessoas2 = {
    nome: string,
    idade: Number,
    corFavorita: CoresArcoIres
}

const pessoa4: Pessoas2 = {
    nome: "Maya",
    idade: 1,
    corFavorita: CoresArcoIres.AZUL_ESCURO
}
console.table(pessoa4);


