import React from 'react';
import './Button.css';


class Button extends React.Component {
  render() {
    const { text, icon, onClick} = this.props;

    return (
      <button className="button"
      onClick={(e)=>onClick()}>
      {text}
      {icon && <div className='iconebotao'>
        {icon}
      </div>}
      </button>
    );
  }
}

export default Button;
