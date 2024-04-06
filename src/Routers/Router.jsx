import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Home from "../Component/Home/Home";
import Register from "../Component/Register/Register";
import Login from "../Component/Login/Login";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
         {
            path: '/',
            element: <Home/>
         },
         {
            path: '/register',
            element: <Register/>
         },
         {
            path: '/login',
            element: <Login/>
         }
      ]
   }
])

export default router;