
import Navbar from '../Home/Shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();
     const noHeaderFooter = location.pathname.includes('login')|| location.pathname.includes('register');
    return (
        <div>
           {noHeaderFooter || <Navbar></Navbar>}
           <Outlet></Outlet> 
        </div>
    );
};

export default Main;