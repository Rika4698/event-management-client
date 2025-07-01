import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthContext";
import { useContext, useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { LuMenu, LuX, LuLogIn } from "react-icons/lu";




const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
   
   
    const handleSignOut = () => {
         if (typeof logOut !== 'function') {
    console.error("logOut is not a function");
    return;
  }
      logOut()
  .then(() => console.log('Logged out'))
  .catch(err => console.error('Logout error:', err));
    };

    const [isOpen, setIsOpen] = useState(false);
   const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const handleOutsideClick = (event) => {
      if (!event.target.closest("#dropdownMenu")) {
        setDropdownOpen(false); // Close dropdown when clicking outside
      }
    };
  
    // Add event listener for outside clicks
    useEffect(() => {
      if (isDropdownOpen) {
        document.addEventListener("click", handleOutsideClick);
      } else {
        document.removeEventListener("click", handleOutsideClick);
      }
      return () => document.removeEventListener("click", handleOutsideClick);
    }, [isDropdownOpen]);
      
    const navOptions=<>
  <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/"
              onClick={() => setIsOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-[#1163cd] font-bold text-lg font-serif " : "font-medium text-slate-800 text-lg font-serif "
                }>Home</NavLink></li>

                {
                !user ? "" : <>

                    <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/add-event" onClick={() => setIsOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-[#1163cd] font-bold text-lg font-serif " : "font-medium text-slate-800 text-lg font-serif "
                }>Add Event</NavLink></li>

                    <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/events"  onClick={() => setIsOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#1163cd] font-bold text-lg font-serif " : "font-medium text-slate-800 text-lg font-serif "
                }>Events</NavLink></li>

                    <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/my-event" onClick={() => setIsOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-[#1163cd] font-bold text-lg font-serif " : "font-medium text-slate-800 text-lg font-serif "
                }>My Event</NavLink></li>
                </>}

                 <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/about" onClick={() => setIsOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-[#1163cd] font-bold text-lg font-serif " : "font-medium text-slate-800 text-lg font-serif "
                }>About Us</NavLink></li>

                    <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/contact" onClick={() => setIsOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-[#1163cd] font-bold text-lg font-serif " : "font-medium text-slate-800 text-lg font-serif "
                }>Contact Us</NavLink></li>
                    
                    
                    
                
  
                 </>
    return (
        <div>
          



     <div className="relative ">

      <nav className="bg-white  shadow-md fixed w-full z-50 top-0 start-0 border-b border-gray-200  ">
        <div className=" flex  items-center justify-between mx-auto p-3 lg:px-8 ">
          {/* Logo Section */}
          <Link to="/">
              <img className=" w-[150px] h-[62px] ml-4 md:w-[150px] lg:w-[150px] lg:h-[62px] lg:ml-4 " src="https://i.ibb.co/RGRfYG1D/eventnest-high-resolution-logo-transparent-1.png" alt="" />
            </Link>


             {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
        className={`fixed top-0 left-0 w-full min-h-screen bg-black bg-opacity-50 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      )}



      {/* Mobile Menu Panel */}
      
      <div
        className={`fixed top-0 left-0 bottom-0 w-2/3 sm:w-1/2 bg-white  lg:h-full
         min-[350px]:h-screen overflow-y-auto z-50 p-6  transition-transform duration-300  ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:flex lg:items-center lg:w-auto lg:p-0 lg:translate-x-0`}
      >
        <div className="h-full overflow-y-auto ">
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden absolute top-4 right-4 p-2 rounded-full   text-gray-800  z-[100]"
          >
            <LuX size={25} />
          </button>

          <div className="p-6 pt-16 lg:hidden">
        {/* Mobile Navigation Links */}
            <ul className="space-y-4 lg:hidden">
             {navOptions}
            </ul>
          </div>
        </div>
      </div>
 

 {/* Desktop Navigation */}
 <div className="hidden lg:flex navbar-center  mx-auto">
            <ul className=" flex  items-center  space-x-5 xl:space-x-9 ">
             {navOptions}
            </ul>
          </div>


            

          {/* Profile Section */}
          <div className=" flex ml-auto lg:ml-0 gap-3 xl:gap-5 relative ">

            {/* User Profile Section */}
            {user ? (
              <>
                <button
                  type="button"
                  className=" flex text-sm bg-gray-800 rounded-full focus:ring-4 transition-transform duration-300 hover:scale-110 focus:ring-gray-300 "
                  onClick={(e) => {e.stopPropagation();
                     setDropdownOpen((prev) => !prev);}}
                >
                  <span className="sr-only">Open user menu</span>
                  <img 
                    className="btn-circle w-12 h-12 lg:w-12 lg:h-12 rounded-full"
                    src={user.photo || 'https://i.ibb.co/F6nmnfQ/user-placeholder.png'}
                    alt=""
                  />
                </button>

                {/* User Dropdown Menu */}
                {isDropdownOpen && (
                  <div id="dropdownMenu" className="z-50 absolute -right-4 top-16   bg-white divide-y divide-gray-100 rounded-lg shadow-lg shadow-slate-600 drop-shadow-lg">
                      <div className="px-4 py-3 ">
                <span className="block text-base xl:text-lg font-bold text-gray-900 ">
                {user.name}
                </span>
                <span className="block text-sm text-gray-500 truncate  ">
                {user.email}
                </span>
              </div>

             
              <ul className="py-2  ">
            

<li className="py-3 px-16">
              <button onClick={handleSignOut} className="rounded-lg text-white bg-red-500    lg:w-28 lg:h-10 w-24 h-10 "  >
                                <BiLogOut className="  inline-flex text-xl   "></BiLogOut>
                                
                                <span className="ml-2 text-base">Logout</span></button>
                                </li>

              
              </ul>
            </div>
          )} </>)
          
          :
         ( <div className="  ">
              <NavLink to='/login'>

                  <button className="btn  font-serif flex px-3 py-2 rounded text-white bg-blue-500 w-24  xl:w-28">
                      <LuLogIn className="  text-2xl  lg:text-2xl lg:flex"></LuLogIn>
                      <span className="text-md ml-2 ">Login</span></button>
              </NavLink>


          </div>)}
          </div>

         {/* Mobile Menu Button */}
 <div className="flex items-center gap-x-3 btn max-[639px]:mx-2 sm:mx-6 md:mx-6 lg:hidden">
            <button onClick={() => setIsOpen(true)} className="lg:hidden ">
              <LuMenu size={25} />
            </button>
          </div>

         
        </div>
      </nav>

     
    </div>


        </div>
    );
};

export default Navbar;