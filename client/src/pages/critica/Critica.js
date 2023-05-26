import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import { useEffect } from "react";
import Header from '../../common/Header/Header'
import http from '../export'


function Critica()
{
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);


    const params = useParams();
    const id = params.id;
    //useEffect(() => {
        //chamar HTTP.post
      //}, []);
     
    
    const[criticasList, setCriticasList] = useState([])

      useEffect(() => {
        http.get('/criticas/').then((response) => {
          setCriticasList(response.data)
        });
      },[]);
    return (
        
      <div className="Página de Críticas {id}">
      <Header/>
      
  
      {criticasList.map((criticas) =>{
        return<h3> 
          {criticas.usuario} 
          {criticas.texto}
          {criticas.nota}
          {criticas.fotoUsuario && <img src={criticas.fotoUsuario} alt="Foto Usuário" />}
        </h3>
      })}

      
  </div>
    )  
}
export default Critica;