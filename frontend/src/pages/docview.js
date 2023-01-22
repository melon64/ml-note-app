import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const DocView = () => {
    const { id } = useParams();
    const { data, error, isPending } = useFetch('' + id);
    return (
        <div className="document">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { data && 
                <div className="documentView">
                    
                </div>}
        </div>
    );
}
 
export default DocView;