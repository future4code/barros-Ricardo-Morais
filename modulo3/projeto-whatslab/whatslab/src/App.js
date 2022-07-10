import logo from './logo.svg';
import './App.css';
import { Header, Footer, Main, Left, Right } from './components/style';
import Logolab from './img/logo-lab.png'
import Formulario from './components/Formulario';



function App() {
  return (
    <div className="App">
      <img src={Logolab} />
      <Header>
        Labzap
      </Header>

      <Left>
          Left
      </Left> 

      <Main>
        Main

        
      </Main>

      <Right>
        Right
      </Right>

      <Footer>
       <h4> Copyright © 2022 Ricardo All Rights Reserved || São Paulo-SP</h4>
      </Footer>

    </div>
  );
}

export default App;
