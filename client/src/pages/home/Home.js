import React, { useState } from 'react';
import { useEffect } from "react";
import './Home.css'
import Header from '../../common/Header/Header';
import SearchBar from '../../common/SearchBar/SearchBar';
import http from '../export'
import Button from '../../common/Button/Button'


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
    <div className="Home">
        <Header/>
        <SearchBar/>
    
      {movieReviewList.map((filme) =>{
        return(<div> 
          {filme.nome} 
          {filme.fotoURL && <img src={filme.fotoURL} alt="Imagem do Filme" />}
        </div>)


      })}

      <Button text="Enviar Crítica" onClick={handleClick}></Button>
      {/* <Button variant='primary' type='submit'>Tezzz</Button> */}
    </div>
  );
}

export default Home;