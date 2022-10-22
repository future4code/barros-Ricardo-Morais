enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function escolherFilmes(nome: string, anoLancamento: Number, genero: GENERO) {
    return {
        nome,
        anoLancamento,
        genero
    }
}

console.log(escolherFilmes("Duna", 2021, GENERO.DRAMA));
