import { useParams } from "react-router-dom";

function Critica()
{
    const params = useParams();
    const id = params.id;
    //useEffect(() => {
        //chamar HTTP.post
      //}, []);

    return <div>Página de Críticas {id}</div>
}
export default Critica;