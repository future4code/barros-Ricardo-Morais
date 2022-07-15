import React from "react"
import { ButtonProximo, Login } from "../style";

function Etapa1() {
    return (
        <Login>
        <h1>ETAPA1 - DADOS GERAIS</h1>
        <form>
            <label>1. Qual o seu nome?</label>
            <input type="text"></input>
            <label>2. Qual a sua idade?</label>
            <input type="text"></input>
            <label>3. Qual o seu email?</label>
            <input type="text"></input>

            <label>4. Qual a sua escolaridade?</label>
            <select name= "escolaridade">
            <option value="">Selecione</option>
            <option value="1">Ensino Médio Incompleto</option>
            <option value="2">Ensino Médio Completo</option>
            <option value="3">Ensino Superior completo</option>
            <option value="4">Ensino Superior Incompleto</option>
            </select>

            <ButtonProximo>Proximo</ButtonProximo>
        </form>

        </Login>
    );
  }
  
  export default Etapa1;
  