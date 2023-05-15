import React from 'react';
import "./HeaderItem.css"


class HeaderItem extends React.Component {
    render() {
      const {name} = this.props;
  
      return (
        <button className='botaoMenu'>{name}</button>
      );
    }
  }
  
  export default HeaderItem;