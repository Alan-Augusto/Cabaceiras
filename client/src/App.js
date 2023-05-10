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
        <label className="titles">Movie name</label>
        <input type="text" name = "movieName"/>
        <label className="titles">Release year</label>
        <input type="text" name = "releaseYear"/>
        <label>Selecione os serviços de streaming:</label>
      </div>
    </div>
  );
}

export default App;
