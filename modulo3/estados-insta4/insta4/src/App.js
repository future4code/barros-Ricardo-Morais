import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import {MainContainer} from './components/Post/style.js';
import { useState } from 'react';


function App() {

const listaPost = [
  {
    nomeUsuario:'Paulinha',
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'
  },

  {
    nomeUsuario:'Ricardo',
    fotoUsuario:'https://picsum.photos/50/51',
    fotoPost:'https://picsum.photos/200/151'
  },

  {
    nomeUsuario:'Maya',
    fotoUsuario:'https://picsum.photos/50/52',
    fotoPost:'https://picsum.photos/200/152'
  },
]

const componentePost = listaPost.map((valor, index) => {
  return <li key={index}><Post nomeUsuario={valor.nomeUsuario} fotoUsuario={valor.fotoUsuario}
  fotoPost={valor.fotoPost}/></li>
})

 console.log(listaPost);

return (
  <MainContainer>
    <ul>{componentePost}</ul>
  </MainContainer>
)}


export default App;
