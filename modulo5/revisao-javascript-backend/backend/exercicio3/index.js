const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]



const loginOk = (contas) => {
    for (let i = 0; i < contas.email.length; i++) {
        if (contas.email.length([i]) === "@") {
            console.log("Sucesso");
            break
        }else {
            console.log("erro");
        }
    }
}

loginOk()