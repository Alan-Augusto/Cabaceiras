import React from 'react';
import './Button.css';


class Button extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <button className="button">{text}</button>
    );
  }
}

export default Button;
