import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthContext';
import axios from 'axios';

const useAxios = () => {
    const {token} = useContext(AuthContext);
    const axiosSecure =axios.create({
        baseURL:'https://event-management-server-tau.vercel.app',
        
    });
    axiosSecure.interceptors.request.use((config) => {
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
    
    return axiosSecure;
};

export default useAxios;