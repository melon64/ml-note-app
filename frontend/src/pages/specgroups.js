import { useEffect, useState } from "react";
import { isLoggedIn } from '../utils/auth';
import { useParams } from "react-router-dom";
import axios from 'axios';

const SpecGroups = () => {
    const { _id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/posts/' + _id)
        .then(response => {
            // if(!response.ok) {
            //     throw Error('Could not fetch the data for that resource');
            // }
            setData(response.data);
            setIsPending(false);
        })
        .catch(err => {
            if(err.name === 'AbortError') {
                console.log('fetch aborted');
            }
            else{
                setError(err.message);
                setIsPending(false);
            }
        });
    }, []);

    if(isLoggedIn()){
        console.log("logged in")
    }else{
       window.location.href = '/login';
    }
    console.log(data);
    return (
        <div className="groupdocs">
            {error && <div>{error}</div>}
            {isPending && <div color="white">Loading...</div>}
            {data && data.map((d) => (
                <div className="doc">
                    <img src={`data:image/png;base64,${d.image}`} alt={d._id}></img>
                    <p className="docdetails">{d.author}</p>
                    <p className="docdetails">{d.tags}</p>
                    <p className="docdetails">{d.suggestions}</p>
                </div>
            ), [])}
        </div>
    );
}
 
export default SpecGroups;