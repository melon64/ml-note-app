import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { setAuthToken } from '../utils/auth';

export default function Login(){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const login_payload = {
            username,
            password
        }
        axios.post(
          "http://127.0.0.1:5000/api/v1/login",
          login_payload
        ).then(response => {
            const token  =  response.data.access_token;
            localStorage.setItem("token", token);
            console.log(token)
            setAuthToken(token);
            window.location.href = '/docs'
        }).catch(err => console.log(err));
    };

    return (
        <body>
            <h1 class="title">
                Login
            </h1>
            <div className="login-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="signupcont">
                    <label for="username">Username:</label>
                    <input id="username" type="text" className="username" name="name" placeholder="E.g 'j.smith'"  maxlength="20" required onChange={e => setUserName(e.target.value)} />
                    <label for="pword">Password:</label>
                    <input id="username" type="password" className="pword" name="name"  maxlength="20" required onChange={e => setPassword(e.target.value)}/>
                    <a class="forgotpword" href="/">
                Forgot Password?
            </a>
            </div>
            <button class="register" type="submit">
                Login
            </button>
            </form>
        </div>
        <div class="signinpic"></div>
    </body>
    );
}
    