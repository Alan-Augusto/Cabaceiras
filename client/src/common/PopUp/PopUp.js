import React from 'react';
import './PopUp.css';
import Button from '../Button/Button'
import http from '../../pages/export';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Rating } from 'primereact/rating';

function PopUp (props) {
  
    const { filmeTitle, close, id} = props;

    const [usuario, setusuario] = useState("");
    const [texto, settexto] = useState("");
    const [nota, setnota] = useState(1);
    const [filme, setfilme] = useState("");

    const handleClick = (e) => {
      http.post('/home/',{
        usuario: usuario,
        texto: texto,
        nota: nota,
        fotoUsuario: "https://cdn-icons-png.flaticon.com/512/17/17115.png?w=740&t=st=1685141086~exp=1685141686~hmac=6d3c85",
        filme: id,
        
      });
    };
  
    const navigate = useNavigate()

    return (
      <div className='completo'>
        <div className='popup'>
          <h3>
            {filmeTitle}
          </h3>
          <Button text="Enviar Crítica" onClick={handleClick}/>
          <Button text="Ver Críticas" onClick={(e)=>navigate('/criticas/'+id)}/>
          <Button text="Fechar" onClick={close}/>
          <Rating value={nota} onChange={(e)=>setnota(e.value)} cancel={false}/>
        </div>
      </div>
    );
  }


export default PopUp;
