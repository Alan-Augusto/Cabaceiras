import React from 'react';
import "./HeaderItem.css"
import {useNavigate} from 'react-router-dom'


const HeaderItem =(props)=>{
      const {name} = props;
      const navigate = useNavigate()

      return (
        <button className='botaoMenu' onClick={(e)=>navigate('/')}>{name}</button>
      );
      
}
  
  export default HeaderItem;