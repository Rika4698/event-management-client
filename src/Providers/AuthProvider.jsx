import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";




const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem('user');
        const storeToken = localStorage.getItem('token');
        if(stored && storeToken){
            setUser(JSON.parse(stored));
            setToken(storeToken);
        }
        setLoading(false);
    }, []);

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
        return Promise.resolve;

    };
    const AuthInfo = {
       
        user,
        token,
        loading,
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