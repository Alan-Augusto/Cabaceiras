import './SearchBar.css'
import InputData from '../InputData/InputData'

function SearchBar() {

return (
    <div className="searchBar">
        <InputData placeholder="Procure por um filme" type="text" id="movieName" className="movieName"
          onChange={()=>console.log("AAAA") } iconUrl='https://img.icons8.com/?size=512&id=XU3XKgdpT0qG&format=png'
        />
    </div>
    
    
  );
}

export default SearchBar;