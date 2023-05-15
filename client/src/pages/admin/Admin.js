import React, { useState } from 'react';
import { useEffect } from "react";
import './Admin.css'
import Button from '../../common/Button/Button'
import InputData from '../../common/InputData/InputData'
import Header from '../../common/Header/Header'
import axios from 'axios'



function Admin() {
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);

  
  const [movieName, setmovieName] = useState("");
  
  useEffect(() => {console.log(movieName)}, [movieName]);

  const handleClick = (e) => {
    console.log(movieName)
    axios.post('url',{movieName})
    

  }

return (
    <div className="Admin">
      <Header/>
      
      <div className= "form">
        <label><h2>Inserção de filme</h2></label>
        <InputData description="Título" placeholder="Nome do filme" type="text" id="movieName" className="movieName" onChange={setmovieName}/>
        
        <InputData description="Ano de Produção" placeholder="Digite um número" type="number" id="releaseYear" className="releaseYear"/>
        
        <InputData description="Duração" placeholder="Duração do filme em minutos" type="number" id="runningTime" className="runningTime"/>
        
        <InputData description="Gênero" placeholder="O gênero principal" type="Text" id="genre" className="genre"/>
        
        <InputData description="Nacionalidade" placeholder="Onde o filme foi produzido" type="Text" id="nationality" className="nationality"/>

        <InputData description="Idioma" placeholder="Digite o idioma nativo" type="Text" id="language" className="language"/>
        
        <InputData description="Classificação" placeholder="Digite um número" type="Number" id="rating" className="rating"/>
        
        <InputData description="Diretor" placeholder="Digite um nome" type="Text" id="director" className="director"/>
        
        <InputData description="Sinopse" placeholder="Digite aqui uma breve descrição da história do filme" type="Text" id="synopsis" className="synopsis"/>


        <label className="titles">Disponível em</label>
        
          <div className="multiSelect">
            <div className="selectColumn">
              <div className="checkboxItem">
              <input type="checkbox" id="GloboPlay"/>
              <label>GloboPlay</label>
              </div> 

              <div className="checkboxItem">
              <input type="checkbox" id="PrimeVideo"/>
              <label>PrimeVideo</label>
              </div>

              <div className="checkboxItem">
              <input type="checkbox" id="HBO Max"/>
              <label>HBO Max</label>
              </div>
          </div>
          
          <div className="selectColumn">
            <div className="checkboxItem">
            <input type="checkbox" id="Star+"/>
            <label>Star+</label>
            </div>
            
            <div className="checkboxItem">
            <input type="checkbox" id="Disney+"/>
            <label>Disney+</label>
            </div>

            <div className="checkboxItem">
            <input type="checkbox" id="Apple TV"/>
            <label>Apple TV</label>
            </div>
          </div>
                
        </div>
        <Button text="Enviar Filme" onClick={handleClick}></Button>
        {/* <Button variant='primary' type='submit'>Tezzz</Button> */}
      </div>
    </div>
    
    
  );
}

export default Admin;