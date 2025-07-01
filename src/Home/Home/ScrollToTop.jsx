import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

useEffect(() => {
  console.log('Navigating to:', pathname); 
  // Scroll to the top whenever the pathname changes
  window.scrollTo(0,0);
}, [pathname]);

return null; // This component renders nothing 
       
};

export default ScrollToTop;