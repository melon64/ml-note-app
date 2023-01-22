import React from "react";
import { useState } from "react";
import axios from "axios";
import "./try.css"
import { isLoggedIn } from "../utils/auth";

const Upload = () => {

    if(isLoggedIn()){
        console.log("logged in")
    }else{
       window.location.href = '/login';
    }

    const uploadFile = async e => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log(reader.result);
            const upload_paypload = {
                "image": reader.result.split(',')[1]
            }
            axios.post(
                "http://localhost:5000/api/v1/posts",
                upload_paypload
            ).then(response => {
                console.log(response)
                window.location.href = '/docs'
            }).catch(err => console.log(err));
        };
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    };
    
    return (
        <div class="parentcont">
            <div class="uploadcont">
                <div class="uploadimg"></div>
                <input class="upload" type="file" name="file" onChange={uploadFile} />
                    Upload a Document
            </div> 
        </div>
        
    );
}

export default Upload;