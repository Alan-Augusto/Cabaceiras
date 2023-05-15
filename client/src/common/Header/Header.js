import React from 'react';
import "./Header.css"
import HeaderItem from "./HeaderItem/HeaderItem"

class Header extends React.Component {
    render() {
      const { placeholder, description,type, id, name} = this.props;
  
      return (
        <div className='conjunto'>
          <div className='logo'>
            Cabaceiras
            {/* Inserir Logo */}
          </div>

          <div className='menuBar'>
            <HeaderItem name="Início"/>
            <HeaderItem name="Profile"/>
          </div>
        </div>
      );
    }
  }
  
  export default Header;