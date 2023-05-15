import React from 'react';
import './Button.css';


class Button extends React.Component {
  render() {
    const { text, onClick} = this.props;

    return (
      <button className="button"
      onClick={(e)=>onClick()}>
      {text}
      </button>
    );
  }
}

export default Button;
