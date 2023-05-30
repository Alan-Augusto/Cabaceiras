import React, { useState } from 'react';
import { useEffect } from "react";
import './Home.css'
import Header from '../../common/Header/Header';
import SearchBar from '../../common/SearchBar/SearchBar';
import http from '../export'
import Button from '../../common/Button/Button'
import CardFilm from '../../common/Card/CardFilm';
import Footer from '../../common/Footer/Footer';


function Home() {
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);

  const[movieReviewList, setmovieList] = useState([])

  useEffect(() => {
    http.get('/home/').then((response) => {
      setmovieList(response.data);
    });
  },[]);


  const [usuario, setusuario] = useState("");
  const [texto, settexto] = useState("");
  const [nota, setnota] = useState("");
  const [fotoUsuario, setfotoUsuario] = useState("");
  const [filme, setfilme] = useState("");
  const [pesquisa, setPesquisa] = useState('')
  const handleClick = (e) => {
    http.post('/home/',{
      usuario: usuario,
      texto: texto,
      nota: nota,
      fotoUsuario: fotoUsuario,
      filme: filme,
      
    });
  };

return (
    <div>
      <div className='header'>
        <Header/>
        <SearchBar/>
      </div>
      <div className='conteudo'>

        {movieReviewList.map((filme) =>{ return(
          <div> 
              <CardFilm
                title={filme.nome}
                informacoes = {filme.sinopse}
                banner = {filme.fotoURL}
                nota = {3}
              />
          </div>
          )
        })}

        <Button text="Enviar Crítica" onClick={handleClick}/>
        {/* <Button variant='primary' type='submit'>Tezzz</Button> */}
      </div>
      
      <div className='rodape'>
        <Footer/>
      </div>
        
    </div>
  );
}

export default Home;