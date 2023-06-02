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
            <HeaderItem name="Início" page=""/>
            <HeaderItem name="Hall da Fama" page=""/>
            <HeaderItem name="Perfil" page=""/>
            <HeaderItem name="Admin" page="admin"/>
          </div>
        </div>
      );
    }
  }
  
  export default Header;