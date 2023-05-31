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
  
  const openPopup = (e) => {
    console.log("Alanzin");
    setPopupOpen(true);
  };

  const closePopup = (e) => {
    console.log("Alanzin");
    setPopupOpen(false);
  };
  

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
                  others = {
                   <div>
                      <img src ="https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png"/>
                      <img src ="https://pbs.twimg.com/profile_images/1587180153603514369/vWiLmja1_400x400.jpg"/>
                      <img src ="https://img.utdstc.com/icon/8d0/5dc/8d05dcf1d6034e9b6dffbab81f64ca8e61a135cc2c738e641b081d4611ba3ca2:200"/>
                      <img src ="https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png"/>
                   </div>
                  }
                  onClick={openPopup}
                />
            </div>
        )  
      })
      }

        <Button text="Enviar Crítica" onClick={handleClick}/>

        {/* O TAL DO POPUP */}
        {popupOpen && (
            <PopUp close={closePopup}/>
        )}

      </div>
      

      {/* PARTE INFERIOR */}
      <div className='rodape'>
        <Footer/>
      </div>
        
    </div>
  );
}

export default Home;