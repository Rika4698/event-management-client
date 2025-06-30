
import Navbar from '../Home/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
     const noHeaderFooter = location.pathname.includes('login')|| location.pathname.includes('register');
    return (
        <div>
           {noHeaderFooter || <Navbar></Navbar>}
           <Outlet></Outlet> 
        </div>
    );
};

export default Main;