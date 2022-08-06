
import Card from './components/Card/Card';
import { Header } from './components/Header/Header';
import { GlobaStyle } from './GlobalStyle';
import { DetailsPage } from './pages/DetailsPage';
import { Homepage } from './pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <GlobaStyle/>
      
      <Homepage/>
      
    </div>
  );
}

export default App;
