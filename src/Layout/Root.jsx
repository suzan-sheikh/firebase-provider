import { Outlet } from "react-router-dom";
import Nav from "../Component/Header/Nav";
import Footer from "../Component/Footer/Footer";

const Root = () => {
   return (
      <div>
         <Nav/>
         <Outlet/>
         <Footer/>
      </div>
   );
};

export default Root;