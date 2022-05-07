console.log("Bem vindo ao Blackjack");
let usuario = Number
let computador = Number
if(confirm("Quer jogar Blackjack?")) {
	confirm = true
} else {
	confirm = false
}
if (confirm === false) {
    console.log("GAME OVER");
} else {  
const carta = comprarCarta();
usuario = carta.valor
const carta2 = comprarCarta();
console.log(`O usuário tirou as  cartas ${carta.texto},  ${carta2.texto}`) 
pontosUsuario = usuario + carta2.valor
console.log(`Total de pontos do usuario é: ${pontosUsuario}`);

const cartaComputador = comprarCarta();
computador = cartaComputador.valor
const cartaComputador2 = comprarCarta();
console.log(`O Computador tirou as  cartas ${cartaComputador.texto}, ${cartaComputador2.texto}`) 
pontosComputador = computador + cartaComputador2.valor
console.log(`Total de pontos do Computador é: ${pontosComputador}`);
}
if (usuario === 21) {
    console.log("Usuário VENCEU!");
    switch(usuario){
        case (usuario === 21):
            console.log("Usuário VENCEU!");
        break
    }

}else if (computador === 21)
    console.log("Computador VENCEU!");
    switch(computador){
        case (computador === 21):
            console.log("Computador VENCEU!");
        break
    }

if (usuario > 21) {
    console.log("Computador VENCEU");
}else if (computador > 21){
    console.log("Usuário VENCEU!");
}
if (usuario > computador) {
    console.log("Usuário VENCEU!");
}else {
    console.log("Computador VENCEU");
}
if (usuario === computador) {
    console.log("Empatou jogue novamente");
}












 
 
 
 