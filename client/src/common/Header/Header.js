import React from 'react';
import "./Header.css"
import HeaderItem from "./HeaderItem/HeaderItem"

class Header extends React.Component {
    render() {
      const { placeholder, description,type, id, name} = this.props;
  
      return (
        <div className='conjunto'>
          <div className='logo'>
            <h3>Cabaceiras</h3>
          </div>

          <div className='menuBar'>
            <HeaderItem name="Início"/>
            <HeaderItem name="Hall da Fama"/>
            <HeaderItem name="Perfil"/>
          </div>
        </div>
      );
    }
  }
  
  export default Header;