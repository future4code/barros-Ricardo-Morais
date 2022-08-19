
import React from "react";
import { BASE_URL } from "./components/Constants/constants";
import { Container } from "./components/HomePage/style";
import RouterPage from "./components/Router";
import useRequestData from "./hook/UseRequestData";



function App() {
  const nomeUsuarios = useRequestData(`${BASE_URL}users`)
  return (
    
    <div className="App">
        <RouterPage/>
        <Container/>
       
        
        
    </div>
  );
}

export default App;
