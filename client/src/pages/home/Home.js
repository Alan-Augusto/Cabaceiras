import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { useEffect } from "react";
import './Home.css'
import Header from '../../common/Header/Header';
import SearchBar from '../../common/SearchBar/SearchBar';
import http from '../export'


function Home() {
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);

  const[movieReviewList, setmovieList] = useState([])

  useEffect(() => {
    http.get('/home/').then((response) => {
      setmovieList(response.data)
    });
  },[]);

return (
    <div className="Home">
        <Header/>
        <SearchBar/>
    
      {movieReviewList.map((filme) =>{
        return<h3>Movie Name : {filme.nome} | {filme.fotoURL && <img src={filme.fotoURL} alt="Imagem do Filme" />}
        </h3>
       

      })}
    </div>
  );
}

export default Home;