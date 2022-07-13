import React from "react"
import { Login } from "../style";

function Etapa3() {
    return (
        <Login>
        <h1>ETAPA2 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <form>
            <label>5. Porque você não terminou o curso de Graduação?</label>
            <input type="text"></input>
            <label>6. Você fez Algum Curso Complementar?</label>
            <select name="curso"> 
            <option value="">Selecione</option>
            <option value="1">Sim</option>
            <option value="2">Nenhum</option>
            </select>
            
           
            
           
        </form>

        </Login>
    );
  }
  
  export default Etapa3;