import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';
import axios from 'axios';

const Documents = () => {

    const [docs, setDocs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/posts/me')
        .then(response => {
            setDocs(response.data);
        })
        .catch(err => console.log(err));
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
        </div>
    </div>
     );
}
 
export default Documents;