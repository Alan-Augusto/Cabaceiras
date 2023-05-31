import "./CardFilm.css"
import React, { useState } from "react";
import { Rating } from 'primereact/rating';
        

class CardFilm extends React.Component {
    render() {
      const { title, nota, informacoes, banner, onClick} = this.props;
      let {plataforma, icones} = this.props;
      if (icones)icones = icones.split(",");
      if(plataforma)plataforma = plataforma.split(",").map(Number);
      
      return (
        <div className='CardFilm' onClick={(e)=>onClick()}>
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
            {plataforma?.map((icone,i) => (
              <div> <img src={icones[i]} alt="Imagem da Plataforma" /></div>
            ))}
                
            </div>
        </div>
      );
    }
  }
  
  export default CardFilm;