import React, { useState } from 'react';
import './PopUp.css';
import Button from '../Button/Button';
import http from '../../pages/export';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'primereact/rating';

function PopUp(props) {
  const { filmeTitle, close, id } = props;

  const [usuario, setUsuario] = useState('');
  const [texto, setTexto] = useState('');
  const [nota, setNota] = useState(1);
  const [filme, setFilme] = useState('');
  const [enviado, setEnviado] = useState(false); // Estado para confirmar o envio

  const clearFields = () => {
    setUsuario('');
    setTexto('');
    setNota(1);
    setFilme('');
  };

  const handleClick = () => {
    console.log(usuario);
    console.log(texto);
    console.log(nota);
    http
      .post('/home/', {
        usuario: usuario,
        texto: texto,
        nota: nota,
        fotoUsuario:
          'https://cdn-icons-png.flaticon.com/512/17/17115.png?w=740&t=st=1685141086~exp=1685141686~hmac=6d3c85',
        filme: id,
      })
      .then(() => {
        // Marcar como enviado após o envio bem-sucedido
        setEnviado(true);
      })
      .catch((error) => {
        console.error('Erro ao enviar crítica:', error);
      });

    http
      .post('/atualizar_critica/', {
        filme: id,
      })
      .catch((error) => {
        console.error('Erro ao atualizar crítica:', error);
      });

    clearFields();
  };

  const navigate = useNavigate();

  return (
    <div className='completo'>
      <div className='popup'>
        <div className='topo'>
          <i className='pi pi-times' onClick={close}></i>
        </div>

        <div className='popup-title'>
          <h3>{filmeTitle}</h3>
          <p>Faça uma avaliação. Sua opinião é muito valiosa pra gente!</p>
          <hr />
        </div>

        <div className='mini-form'>
          <Rating value={nota} onChange={(e) => setNota(e.value)} cancel={false} />

          <input
            className='input-name'
            type='text'
            placeholder='Qual seu nome?'
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <textarea
            className='input-textarea'
            placeholder='Nos conte o que achou deste filme.'
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </div>

        <div className='popup-buttons'>
          <Button
            text='Ver Críticas'
            onClick={(e) => navigate('/criticas/' + id)}
            icon={<i className='pi pi-eye' style={{ fontSize: '1rem' }}></i>}
          />

          <Button
            text='Enviar Crítica'
            onClick={handleClick}
            icon={<i className='pi pi-send' style={{ fontSize: '1rem' }}></i>}
          />
        </div>

        {enviado && <p>Crítica enviada com sucesso!</p>} {/* Exibe a mensagem quando enviado é verdadeiro */}
      
      </div>
    </div>
  );
}

export default PopUp;
