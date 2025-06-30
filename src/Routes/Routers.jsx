import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Registration from "../Registration/Registration";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import AddEvent from "../AddEvent/AddEvent";



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
          element:<AddEvent></AddEvent>,
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