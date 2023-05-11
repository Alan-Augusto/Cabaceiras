import React from 'react';
import "./Button.css"


function Button() {
  function exibirMensagem() {
    alert("Mensagem exibida!");
  }

  return (
    <button className='button' onClick={exibirMensagem}>Clique aqui</button>
  );
}

export default Button;
