import './App.css';
import Card from './components/Card/Card';
import { Header } from './components/Header/Header';
import { DetailsPage } from './pages/DetailsPage';
import { Homepage } from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <Homepage/>
      <DetailsPage/>
    </div>
  );
}

export default App;
