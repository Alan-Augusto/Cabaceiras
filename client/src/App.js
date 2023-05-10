import { useEffect } from "react";
import "./App.css"


function App() {
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>CABACEIRAS</h1>
      </div>
      
      
      <div className= "form">
        <label><h2>Inserção de filme</h2></label>
        <label className="titles">Nome do filme</label>
        <input id="movieName"type="text" name = "movieName"/>
        
        <label className="titles">Ano de produção</label>
        <input id="releaseYear" type="text" name = "releaseYear"/>
        
        <label className="titles">Disponóvel em</label>
        
        <div className="multiSelect">
          <laberl>Netflix</laberl>
          <input type="checkbox" id="GloboPlay"/><laberl>GloboPlay</laberl>
          <input type="checkbox" id="PrimeVideo"/><laberl>PrimeVideo</laberl>
          <input type="checkbox" id="HBO Max"/><laberl>HBO Max</laberl>
          <input type="checkbox" id="Star+"/><laberl>Star+</laberl>
          <input type="checkbox" id="Disney+"/><laberl>Disney+</laberl>
          <input type="checkbox" id="Apple TV"/><laberl>Apple TV</laberl>
          <input type="checkbox" id="Directv Go"/><laberl>Directv Go</laberl>
          <input type="checkbox" id="Hulu"/><laberl>Hulu</laberl>
        </div>

        <button class="btn-13">Inseir</button>
      </div>
    </div>
  );
}

export default App;
