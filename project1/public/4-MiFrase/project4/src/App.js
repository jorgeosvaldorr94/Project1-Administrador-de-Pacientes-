import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #F7C0C0 0%, #E97C7C 0%, #F23838 100%);
  background-size: 400px;
  font-family:  Arial, Helvetica, sans-serif;
  color: white;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid white;
  border-radius: 55px;
  transition: background-size .8s ease;
  box-shadow: 12px 12px 20px rgb(160, 0, 0, 0.2);
  :hover {
    cursor:pointer;
    background-size: 400px;
    border: 3px solid white;
    color: white;
    transform: scale(1.03, 1.03);
    box-shadow: 12px 12px 20px rgb(160, 0, 0, 0.2);
  }
  :active {
    box-shadow: 12px 12px 20px rgb(160, 0, 0, 0.2) inset; 
  }
`;

const App = () => {

  // State de frase
  const [frase, guardarFrase] = useState({});

  //********* Variante 1 *********
  // const consultarAPI = () => {
    
  //   const api = fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    
  //   const frase = api.then( respuesta => {
  //     return respuesta.json();
  //   });

  //   frase.then( respuesta => {
  //     return console.log(respuesta);
  //   });
  // };
 
  //********* Variante 1 Simplificada *********
  // const consultarAPI = () => {

  //   const api = fetch('https://api.breakingbadquotes.xyz/v1/quotes');
  //   const frase = api.then( respuesta => respuesta.json());
  //   frase.then( respuesta => console.log(respuesta));
  // };

  //********* Variante 2 ********
  const consultarAPI = async () => {
    
    const api = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const frase = await api.json();
    console.log(frase[0]);
    guardarFrase(frase[0]);   
  };

  //Cargar una frase
  useEffect( () => {
    consultarAPI();
  }, [] )

    return ( 
        <Contenedor>

            <Frase
              frase={frase}              
            />

            <Boton
              onClick={ () => consultarAPI() }
            >
              New Frase
            </Boton>
        </Contenedor>
     );
};
 
export default App;



