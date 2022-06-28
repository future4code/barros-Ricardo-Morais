import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemPerfil from './profissional.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="./src./profissional.jpg" 
          nome="Ricardo Barros" 
          descricao="Oi, eu sou o Ricardo. Sou Estudante da Labenu. Gosto muito de futebol, principalmente do Corinthians. Sou taxista, pai recente. Eu amo os momentos em família!"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container-pequeno">
        <h2>Contato</h2>
        <CardPequeno
          
          nome="email:" 
          descricao="ricardo_teleco@hotmail.com" 
        />
        
        <CardPequeno
          
          nome="endereço:" 
          descricao="Grajaú São Paulo" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardPequeno 
           
          nome="Frentista" 
          descricao="Trabalhei 8 anos como frentista, tenho boas lembranças, eu construi minha casa trabalhando como frentista." 
        />
        
        <CardPequeno 
         
          nome="Taxista" 
          descricao="Atualmente trabalho como taxista em São Paulo. Dirijo todos os dias em um dos piores trânsitos do mundo! Porém eu gosto. " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
