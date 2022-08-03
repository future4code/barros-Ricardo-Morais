import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  
  const [inputName, SetimputName] = useState("")
  const [inputEmail, SetinputEmail] = useState("") 
  
  const atualizaName = (event) => {
    SetimputName (event.target.value)
  }

  const atualizaEmail = (event) => {
    SetinputEmail (event.target.value)
  }

  const body= {
    name: inputName,
    email: inputEmail
  }

  const myHeaders = {
    headers:{
      Athorization: "ricardo-barros-barros"
    }
  }

  const adicionaNameEmail = (event) => {
    event.preventDefault()
    
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, myHeaders)
    .then(() => {
      alert ("Sucesso")
    })
    .catch(() => {
      alert ("Erro!")
    })
  }
  

  return (
    <div className='App'>
      <input type="text" value={inputName} onChange={atualizaName} placeholder="Digite seu nome:"></input>
      <input type="email" value={inputEmail} onChange={atualizaEmail} placeholder="Digite o Email:"></input>
      <button onClick={adicionaNameEmail}> Adicionar</button>
    </div>
  )

  
}


export default App;
