import { useEffect, useState } from 'react';
import { isLoggedIn } from '../utils/auth';
import DocList from '../components/doclist';
import axios from 'axios';

const Documents = () => {

    const [docs, setDocs] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/posts/me')
        .then(response => {
            // if(!response.ok) {
            //     throw Error('Could not fetch the data for that resource');
            // }
            setDocs(response.data);
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
    console.log(docs);

    return ( 
    <div>
        <link rel="stylesheet" href="index.css"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=La+Belle+Aurore&display=swap"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"></link>
        {error && <div>{error}</div>}
        {isPending && <div color="white">Loading...</div>}
        {docs && <DocList document={docs} />}
        {/* <div className="page">
        <div className="doc">
            <div className="fileprev"></div>
            <p className="docname">Doc Name</p>
        </div>
        <div className="doc">
            <div className="fileprev"></div>
            <p className="docname">Doc Name</p>
        </div>
        <div className="doc">
            <div className="fileprev"></div>
            <p className="docname">Doc Name</p>
        </div>
        </div>
        <div className="page">
            <div className="doc">
                <div className="fileprev"></div>
                <p className="docname">Doc Name</p>
            </div>
            <div className="doc">
                <div className="fileprev"></div>
                <p className="docname">Doc Name</p>
            </div>
            <div className="doc">
                <div className="fileprev"></div>
                <p className="docname">Doc Name</p>
            </div>
        </div> */}
    </div>
     );
}
 
export default Documents;