import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorMessage from "../ErrorMessage/ErrorMessage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorMessage></ErrorMessage>,
  },
]);