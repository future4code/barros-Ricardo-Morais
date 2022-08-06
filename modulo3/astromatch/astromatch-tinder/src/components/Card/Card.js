import { CardContainer } from "./style.js";

function Card () {
    return (
        
        <CardContainer>
            <img src="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person"/>
            <h2>Nome</h2>
            <p>Descrição</p>
        </CardContainer>
            
    )
}

export default Card;