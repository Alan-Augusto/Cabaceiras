import React from 'react';
import "./Button.css"


function Button() {
  function exibirMensagem() {
    alert("Filme adicionado!");
  }

  return (
    <button className='button' onClick={exibirMensagem}>Enviar Filme</button>
  );
}

export default Button;
