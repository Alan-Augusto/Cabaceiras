import "./Critica.css"
import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import { useEffect } from "react";
import Header from '../../common/Header/Header'
import http from '../export'
import CardFilm from "../../common/Card/CardFilm";
import { Rating } from "primereact/rating";


function Critica()
{
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);

    const params = useParams();
    const id = params.id;

    const[nota, setNota] = useState(0)

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
        <div className="sup">
          <label className="textinho">Veja o que as pessoas estão dizendo sobre</label>
          <label className="filmname">{filme.nome}</label>
        </div>
        <div className="informacoes">
          <hr/>
          <div className="mininfo">
            <label>Filtre as avaliações:</label>
            <Rating value={nota} onChange={(e)=>setNota(e.value)}/>
          </div>
          <hr/>
        </div>
        <div className="conteudo">

        

        {criticasList.filter((critica) => {
          if (nota === null || nota === 0) {
            return true; // Mostra todas as críticas se nenhuma nota estiver selecionada
          } else {
            return critica.nota === nota; // Mostra apenas as críticas com a nota selecionada
          }
        }).map((critica) => {
          
          return (
            <div>
              <CardFilm
                title={critica.usuario}
                informacoes={critica.texto}
                banner={critica.fotoUsuario}
                nota={critica.nota}
                width_image={100}
                onClick={() => console.log(critica.usuario + ' - ' + critica.nota)}
              />
            </div>
          );
        })}
        </div>

        
  </div>
    )  
}
export default Critica;