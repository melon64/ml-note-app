import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Documents = () => {
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