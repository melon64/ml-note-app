import axios from 'axios';
 
export const setAuthToken = token => {
   if (token) {
       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   }
   else
       delete axios.defaults.headers.common["Authorization"];
    }    

//check if user is logged in
export const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    if(token) {
         return true;
    }
    return false;
    }
