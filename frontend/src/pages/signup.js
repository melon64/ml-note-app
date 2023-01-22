import React from "react";
import { useState } from "react";
import axios from "axios";
import { isLoggedIn } from "../utils/auth";
import { renderMatches } from "react-router-dom";

export default function Signup(){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const loggedIn = isLoggedIn();



    const handleSubmit = async e => {
        e.preventDefault();
        const signup_paypload = {
            username,
            password
        }
        axios.post(
          "http://127.0.0.1:5000/api/v1/users",
          signup_paypload
        ).then(response => {
            console.log(response)
            window.location.href = '/login'
        }).catch(err => console.log(err));
    };

    //logout function
    const logout = () => {
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        window.location.href = '/login'
    }
    return (
        <body>
            <h1 class="title">
                Signup
            </h1>
            {loggedIn
            ?<button onClick={ logout } class="register" type="submit">Logout</button>
            :
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="signupcont"> 
                        <label for="username">Username:</label>
                        <input id="username" type="text" className="username" name="name" placeholder="E.g 'j.smith'"  maxlength="20" required onChange={e => setUserName(e.target.value)} />
                        <label for="pword">Password:</label>
                        <input id="username" type="password" className="pword" name="name"  maxlength="20" required onChange={e => setPassword(e.target.value)}/>
                        <a class="alracc" href="/login">
                            Already have an account? Sign in here!
                        </a>
                    </div>
                    <button class="register" type="submit">
                        Signup
                    </button>
                </form>
            </div>
            }
        <div class="signinpic"></div>
        </body>
    );}