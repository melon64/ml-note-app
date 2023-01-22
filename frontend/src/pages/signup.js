import React from "react";

const Signup = () => {
    return (
        <body>
            <h1 class="title">
                Sign up
            </h1>
            <div className="signupcont">
                <label for="username">Username:</label>
                <input id="username" type="text" className="username" name="name" placeholder="E.g 'j.smith'"  maxlength="20" required />
                <label for="pword">Password:</label>
                <input id="username" type="password" className="pword" name="name"  maxlength="20" required />
            <a class="forgotpword" href="/">
                Forgot Password?
            </a>
            <a class="alracc" href="/login">
                Already have an account? Sign in here!
            </a>

        </div>
        <button class="register">
            Register
        </button>
            <div class="signinpic">
            </div>
    </body>
    );
}

export default Signup;