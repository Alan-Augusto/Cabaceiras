import "./CardFilm.css"
import React, { useState } from "react";
import { Rating } from 'primereact/rating';
        

class CardFilm extends React.Component {
    render() {
      const { title, nota, informacoes, banner, onClick, width_image , width_card} = this.props;
      let { plataforma, icones } = this.props;
      if (icones) icones = icones.split(",");
      if (plataforma) plataforma = plataforma.split(",").map(Number);
      
      return (
        <div className='CardFilm' onClick={(e) => onClick()} style={{width: width_card}}>
          <div className='banner'>
          <img src={banner} alt="Imagem do Filme" style={{ width: width_image }} />
            <Rating value={nota} disabled cancel={false} />
          </div>

          {/* Informações */}
          <div className='info'>
            <h3>{title}</h3>
            <label>{informacoes}</label>
          </div>

          {/* Div "others" */}
          {plataforma && (
            <div className='others'>
              {plataforma.map((icone, i) => (
                <div key={i}>
                  <img src={icones[i]} alt="Imagem da Plataforma" />
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
}
  
export default CardFilm;
