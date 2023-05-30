import "./CardFilm.css"
import React, { useState } from "react";
import { Rating } from 'primereact/rating';
        

class CardFilm extends React.Component {
    render() {
      const { title, nota, informacoes, banner, others} = this.props;
  
      return (
        <div className='CardFilm'>
            <div className='banner'>
              <img src={banner} alt="Imagem do Filme" />
              <Rating value={nota} disabled cancel={false} />
            </div>

            {/* Informações */}
            <div className='info'>
              <h3>{title}</h3>
              <label>{informacoes}</label>
            </div>



            <div className='others'>
              <img src={others} alt="Plataformas" />
            </div>
        </div>
      );
    }
  }
  
  export default CardFilm;