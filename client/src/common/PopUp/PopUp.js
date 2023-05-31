import React from 'react';
import './PopUp.css';
import Button from '../Button/Button'


class PopUp extends React.Component {
  render() {
    const { filmeTitle, close} = this.props;

    return (
      <div className='completo'>
        <div className='popup'>
          <h3>
            Aqui o filme será avaliado
          </h3>
          <Button text="Fechar" onClick={close}/>
        </div>
      </div>
    );
  }
}

export default PopUp;
