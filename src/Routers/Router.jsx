import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Home from "../Component/Home/Home";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
         {
            path: '/',
            element: <Home/>
         }
      ]
   }
])

export default router;