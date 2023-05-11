import React from 'react';
import { useEffect } from "react";
import './Admin.css'
import Button from '../../common/Button/Button'



function Admin() {
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);

return (
    <div className="Admin">
      <div className="header">
        <h1>CABACEIRAS</h1>
      </div>
      
      <div className= "form">
        <label><h2>Inserção de filme</h2></label>
        <label className="titles">Nome do filme</label>
        <input id="movieName"type="text" name = "movieName"/>
        
        <label className="titles">Ano de produção</label>
        <input id="releaseYear" type="number" name = "releaseYear"/>
        
        <label className="titles">Disponível em</label>
        
          <div className="multiSelect">
            <div className="selectColumn">
              <div className="checkboxItem">
              <input type="checkbox" id="GloboPlay"/>
              <label>GloboPlay</label>
              </div> 

              <div className="checkboxItem">
              <input type="checkbox" id="PrimeVideo"/>
              <label>PrimeVideo</label>
              </div>

              <div className="checkboxItem">
              <input type="checkbox" id="HBO Max"/>
              <label>HBO Max</label>
              </div>
          </div>
          
          <div className="selectColumn">
            <div className="checkboxItem">
            <input type="checkbox" id="Star+"/>
            <label>Star+</label>
            </div>
            
            <div className="checkboxItem">
            <input type="checkbox" id="Disney+"/>
            <label>Disney+</label>
            </div>

            <div className="checkboxItem">
            <input type="checkbox" id="Apple TV"/>
            <label>Apple TV</label>
            </div>
          </div>
                
        </div>
        <Button text="Enviar Filme"></Button>
      </div>
    </div>
    
  );
}

export default Admin;