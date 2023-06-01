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

    const clearFields = () => {
      setusuario("");
      settexto("");
      setnota(1);
      setfilme("");
    };

    const handleClick = (e) => {
      console.log(usuario);
      console.log(texto);
      console.log(nota);
      http.post('/home/',{
        usuario: usuario,
        texto: texto,
        nota: nota,
        fotoUsuario: "https://cdn-icons-png.flaticon.com/512/17/17115.png?w=740&t=st=1685141086~exp=1685141686~hmac=6d3c85",
        filme: id,
        
      });
      http.post('/atualizar_critica/', {
        filme:id
      })
      
      clearFields();
    };
  
    const navigate = useNavigate()

    return (
      <div className='completo'>
        <div className='popup'>

          <div className='topo' >
            <i className="pi pi-times" onClick={close}></i>
          </div>
          
          <div className='popup-title'>
            <h3>
              {filmeTitle}
            </h3>
            <p>
            Faça uma avaliação. Sua opinião é muito valisa pra gente!
            </p>
            <hr/>
          </div>
          
          <div className='mini-form'>
            <Rating value={nota} onChange={(e)=>setnota(e.value)} cancel={false}/>

            <input
              className='input-name'
              type='text'
              placeholder='Qual seu nome?'
              value={usuario}
              onChange={(e)=>setusuario(e.target.value)}
            />

            <textarea
              className='input-textarea'
              placeholder='Nos conte o que achou deste filme.'
              value={texto}
              onChange={(e)=>settexto(e.target.value)}
            />
          </div>
          
          <div className='popup-buttons'>
            <Button text="Ver Críticas" onClick={(e)=>navigate('/criticas/'+id)}/>
            <Button text="Enviar Crítica" onClick={handleClick}/>
          </div>

        </div>
      </div>
    );
  }


export default PopUp;
