import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ScrollToTop from "../Home/Home/ScrollToTop";
import Footer from "../Home/Shared/Footer/Footer";
import Navbar from "../Home/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
       
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
      }, []);

const noHeaderFooter = location.pathname.includes('login')|| location.pathname.includes('register');
   
    return (
        <div>
             {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-white ">
        <span className="loading loading-spinner loading-lg text-gray-800 "></span>
    </div>
      ) : (<>
            <ScrollToTop></ScrollToTop>
            <div className=''>
            { noHeaderFooter|| <Navbar></Navbar>}
            </div>
           
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
            
            </>)}
           
        </div>
    );
};

export default Main;