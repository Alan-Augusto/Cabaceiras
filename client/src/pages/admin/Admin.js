import React, { useState } from 'react';
import { useEffect } from "react";
import './Admin.css'
import Button from '../../common/Button/Button'
import InputData from '../../common/InputData/InputData'
import Header from '../../common/Header/Header'
import Footer from '../../common/Footer/Footer'
import axios from 'axios'
import http from '../export'


function Admin() {
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);

  
  const [movieName, setmovieName] = useState("");
  const [movieProd, setmovieProd] = useState("");
  const [movieDur, setmovieDur] = useState("");
  const [movieGen, setmovieGen] = useState("");
  const [movieNac, setmovieNac] = useState("");
  const [movieIdio, setmovieIdio] = useState("");
  const [movieClass, setmovieClass] = useState("");
  const [movieDire, setmovieDire] = useState("");
  const [movieSin, setmovieSin] = useState("");
  const [movieBanner, setmovieBanner] = useState("");
  const [globoPlay, setGloboPlay] = useState(false);
  const [netflix, setNetflix] = useState(false);
  const [primeVideo, setPrime] = useState(false);
  const [star, setStar] = useState(false);
  const [disney, setDisney] = useState(false);
  const [hboMax, setHBOMax] = useState(false);
  
  useEffect(() => {console.log(movieName)}, [movieName]);
 
  
  const handleClick = (e) => {
    
    console.log(movieName)
    http.post('/admin/',{
      nome: movieName,
      ano: movieProd,
      duracao: movieDur,
      genero: movieGen,
      nacionalidade: movieNac,
      idioma: movieIdio,
      classificacao: movieClass,
      diretor: movieDire,
      sinopse: movieSin,
      fotoURL: movieBanner,
      netflixBD: netflix,
      globoPlayBD: globoPlay,
      primeVideoBD: primeVideo,
      starBD: star,
      disneyBD: disney,
      hboMaxBD: hboMax,
    });
  };

  

return (
    <div className="Admin">
      <Header/>
      
      <div className= "form">
        <label id="nomeFilme"><h2>Inserção de filme</h2></label>
        <InputData description="Título" placeholder="Nome do filme" type="text" id="movieName" className="movieName"
          onChange={setmovieName}
        />
        <InputData description="Ano de Produção" placeholder="Digite um número" type="number" id="releaseYear" className="releaseYear"
          onChange={setmovieProd}
        />
        
        <InputData description="Duração" placeholder="Duração do filme em minutos" type="number" id="runningTime" className="runningTime"
          onChange={setmovieDur}
        />
        
        <InputData description="Gênero" placeholder="O gênero principal" type="Text" id="genre" className="genre"
          onChange={setmovieGen}
        />
        
        <InputData description="Nacionalidade" placeholder="Onde o filme foi produzido" type="Text" id="nationality" className="nationality"
          onChange={setmovieNac}
        />

        <InputData description="Idioma" placeholder="Digite o idioma nativo" type="Text" id="language" className="language"
          onChange={setmovieIdio}
        />
        
        <InputData description="Classificação" placeholder="Digite um número" type="Number" id="rating" className="rating"
          onChange={setmovieClass}
        />
        
        <InputData description="Diretor" placeholder="Digite um nome" type="Text" id="director" className="director"
          onChange={setmovieDire}
        />
        
        <InputData description="Sinopse" placeholder="Digite aqui uma breve descrição da história do filme" type="Text" id="synopsis" className="synopsis"
          onChange={setmovieSin}
        />

        <InputData description="Banner" placeholder="Insira a URL do banner do filme" type="url" id="bannerURL" className="bannerURL"
          onChange={setmovieBanner}
        />

        <label className="titles">Disponível em</label>
        
          <div className="multiSelect">
            <div className="selectColumn">
              <div className="checkboxItem">
              <input type="checkbox" id="GloboPlay" onChange={() => setGloboPlay(!globoPlay)}/>
              <label>GloboPlay</label>
              </div> 

              <div className="checkboxItem">
              <input type="checkbox" id="PrimeVideo" onChange={() => setPrime(!primeVideo)}/>
              <label>PrimeVideo</label>
              </div>
          </div>
          
          <div className="selectColumn">
            <div className="checkboxItem">
            <input type="checkbox" id="Star+" onChange={() => setStar(!star)}/>
            <label>Star+</label>
            </div>
            
            <div className="checkboxItem">
            <input type="checkbox" id="Disney+" onChange={() => setDisney(!disney)}/>
            <label>Disney+</label>
            </div>
          </div>

          <div className="selectColumn">

            <div className="checkboxItem">
            <input type="checkbox" id="HBO Max" onChange={() => setHBOMax(!hboMax)}/>
            <label>HBO Max</label>
            </div>

            <div className="checkboxItem">
            <input type="checkbox" id="Netflix" onChange={() => setNetflix(!netflix)}/>
            <label>Netflix</label>
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