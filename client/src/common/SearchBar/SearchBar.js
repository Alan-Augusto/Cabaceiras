import React from 'react';
import "./SearchBar.css"
import 'primeicons/primeicons.css';
        


class SearchBar extends React.Component {
    render() {
      const { placeholder, description,type, id, name, onChange, icon} = this.props;
  
      return (
        <div className='barra'>
          <input type={type} 
                placeholder={placeholder} 
                className='input' 
                id={id} 
                name = {name} 
                onChange={(e)=>onChange(e.target.value)}>
          </input>
          <i className="pi pi-search" style={{ fontSize: '1.5em', color: 'rgb(187, 187, 187)', margin:'8px'}}></i>
        </div>
      );
    }
  }
  
  export default SearchBar;