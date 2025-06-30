import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthContext';
import axios from 'axios';

const useAxios = () => {
    const {token} = useContext(AuthContext);
    const axiosSecure =axios.create({
        baseURL:'http://localhost:5000',
        headers:{
            Authorization: token ? `Bearer${token}`: '',
        },
    });
    return axiosSecure;
};

export default useAxios;