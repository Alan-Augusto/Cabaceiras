import { useEffect } from "react";
import "./App.css"
import Button from './common/Button';



function App() {
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);

  // var [multiSelectValue, setMultiselectValue] = useState( {
  //   GloboPlay: false,
  //   PrimeVideo: false,
  //   HBOMax: false,
  //   Star: false,
  //   Disney: false,
  //   AppleTV: false,
  //   DirectvGo: false,
  //   Hulu: false,
  // })

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
        <Button />
      </div>
    </div>
    
  );
}

export default App;
