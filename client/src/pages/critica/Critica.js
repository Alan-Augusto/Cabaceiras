import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import { useEffect } from "react";
import Header from '../../common/Header/Header'
import http from '../export'
import CardFilm from "../../common/Card/CardFilm";


function Critica()
{
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);

  const params = useParams();
  const id = params.id;
   
    const[criticasList, setCriticasList] = useState([])
    const[filme, setFilme] = useState("")
      useEffect(() => {
        http.post('/criticas/', {id:id}).then((response) => {
          setCriticasList(response.data)
          console.log(response.data)
        });
      },[]);


      http.post('/filme/', {id:id}).then((response) => {
        setFilme(response.data[0])
      });


    return (
        // entender como funciona o ID
      <div className="Críticas">
      <Header/>
      <h1>Avaliações {filme.nome}</h1>
  
      {criticasList.map((criticas) =>{
        return(
        <CardFilm
                  title={criticas.usuario}
                  informacoes = {criticas.texto}
                  banner = {criticas.fotoUsuario}
                  nota = {criticas.nota}
        />)
      })}

      
  </div>
    )  
}
export default Critica;