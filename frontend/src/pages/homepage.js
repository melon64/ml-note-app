import {Routes, Route, useNavigate} from 'react-router-dom';
import Signup from './signup.js';
import { isLoggedIn } from '../utils/auth.js';

const Home = () => {
    const loggedIn = isLoggedIn();
    const navigate = useNavigate();
    const handleClick = () => {
       navigate('/signup')
    }


    return ( 
        


        <div>
            <title>Home</title>
            <link rel="stylesheet" href="index.css"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=La+Belle+Aurore&display=swap"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"></link>
            <div className="himg1">
            </div>

            <div class="himg1">
            </div>

            <div class="himg2">
            </div>
            
            <div class="mainpagecont">
                <p class="slogan">
                  Lorem Ipsum ....
                </p>
                <div>
                    {loggedIn
                    ? <div><h1>Welcome Back!</h1>  <a href="/signup">Logout?</a></div>
                    : <button class='signup' onClick={handleClick}>Sign Up Now!</button>
                    }
                </div>
                
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </div>
     );
}


export default Home;