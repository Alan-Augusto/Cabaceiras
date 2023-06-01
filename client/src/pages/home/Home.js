 import React, { useState } from 'react';
import { useEffect } from "react";
import './Home.css'
import Header from '../../common/Header/Header';
import http from '../export';
import Button from '../../common/Button/Button';
import CardFilm from '../../common/Card/CardFilm';
import Footer from '../../common/Footer/Footer';
import SearchBar from '../../common/SearchBar/SearchBar';
import PopUp from '../../common/PopUp/PopUp';


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

  const [popupOpen, setPopupOpen] = useState(false);
  
  const openPopup = (val) => {
    console.log("Alanzin");
    setPopupOpen(true);
    setFilmeEscolhido(val.id);
    setFilmeNome(val.nome)
  };

  const closePopup = (e) => {
    console.log("Alanzin");
    setPopupOpen(false);
  };
  
  const [filmeEscolhido, setFilmeEscolhido] = useState("");
  const [filmeNome, setFilmeNome] = useState("");

  
  const [pesquisa, setPesquisa] = useState('')
  
return (
    <div>
      {/* PARTE SUPERIOR */}
      <div className='header'>
        <Header/>
      </div>


      {/* PARTE DO CONTEÚDO */}
      <div className='conteudo'>
        <SearchBar type= "text" placeholder="Buscar filme..." onChange={setPesquisa} />
        {movieReviewList.filter((val) =>{
          if (pesquisa == ""){
            return val;
          } else if (val.nome.toLowerCase().includes(pesquisa.toLowerCase())){
            return val
          }
        }).map((val) =>{
          return (
              <div> 
                  <CardFilm
                    title={val.nome}
                    informacoes = {val.sinopse}
                    banner = {val.fotoURL}
                    nota = {val.estrelas}
                    plataforma = {val.plataformas}
                    icones = {val.icones}
                    onClick={() => openPopup(val)}
                  />
              </div>
          )  
        })
        }
        {/*passar esses botões para o PopUp*/}
        

        {/* O TAL DO POPUP */}
        {popupOpen && (
            <PopUp close={closePopup} filmeTitle = {filmeNome} id = {filmeEscolhido}/>
        )}

      </div>
      

      {/* PARTE INFERIOR */}
      <div className='rodape'>
        {!popupOpen && (
            <Footer/>
        )}
        
      </div>
        
    </div>
  );
}

export default Home;