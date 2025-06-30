import { useState } from "react";
import { AuthContext } from "./AuthContext";




const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [token, setToken] = useState(localStorage.getItem('token'));

    const signIn = (userData, jwt) => {
        setUser(userData);
        setToken(jwt);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', jwt);
    };

    const logOut = () => {
        setUser(null);
        setToken(null);
        localStorage.clear();

    };
    const AuthInfo = {
       
        user,
        token,
        signIn,
        logOut,
     }; 

    return(
        <AuthContext.Provider value = {AuthInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;