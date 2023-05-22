import './SearchBar.css'
import InputData from '../InputData/InputData'
import Button from '../Button/Button'

function SearchBar() {

return (
    <div className='searchContainer'>
      <div className="searchBar">
          <InputData placeholder="Procure por um filme" type="text" id="movieName" className="movieName"
            onChange={()=>console.log("AAAA") }
          />
          
          <Button text="Buscar"/>
      </div>
    </div>
    
    
  );
}

export default SearchBar;