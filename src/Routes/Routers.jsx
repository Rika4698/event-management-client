import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Registration from "../Registration/Registration";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import AddEvent from "../AddEvent/AddEvent";
import AllEvents from "../AllEvents/AllEvents";
import MyEvent from "../MyEvent/MyEvent";
import UpdateEvent from "../MyEvent/UpdateEvent";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Contact from "../Contact/Contact";
import About from "../About/About";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorMessage></ErrorMessage>,
     children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
          path:'/add-event',
          element:<PrivateRoute><AddEvent></AddEvent></PrivateRoute>,
        },
        {
          path:'/events',
          element:<PrivateRoute><AllEvents></AllEvents></PrivateRoute>,
        },
        {
          path:'/my-event',
          element:<PrivateRoute><MyEvent></MyEvent></PrivateRoute>,
        },
        {
          path:'/update/:id',
          element:<UpdateEvent></UpdateEvent>,
        },
        {
          path:'/about',
          element:<About></About>,
        },
        {
           path:'/contact',
           element:<Contact></Contact>,
        },
     
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Registration></Registration>,
      }
      
      ]
  },
]);