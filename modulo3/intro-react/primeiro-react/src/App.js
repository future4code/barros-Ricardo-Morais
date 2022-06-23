import imagem from './IMG_20190421_071829964.jpg';
import './App.css';

function App() {
  function mensagem(){
    alert ("Boa Noite!")
  }
  const apresentacao = "Olá, Me chamo Ricardo!" 
  return (
    <div className="App">
      <header className="App-header">
        <h1>{apresentacao}</h1>
        <img src={imagem} className="Foto-Ricardo" alt="imagem" />
        <p>
         Este é o meu primeiro React!
        </p>
        <button onClick={mensagem}>APERTE AQUI</button>
       
      </header>
    </div>
  );
}

export default App;
