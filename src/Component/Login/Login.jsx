import { useState } from "react";
import { IoIosEyeOff, IoMdEye} from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
   const [showPassword, setShowPassword] = useState(true)
   return (
      <div className="mx-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
         <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm text-gray-600">Sign in to access your account</p>
         </div>
         <form noValidate="" action="" className="space-y-6">
            <div className="space-y-4">               
               <div>
                  <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                  <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
               </div>
               <div className="relative">
                  <div className="flex justify-between mb-2">
                     <label htmlFor="password" className="text-sm">Password</label>
                     <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</a>
                  </div>
                  <input type={showPassword ? 'password' : 'text' } name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                  <span onClick={() => setShowPassword(!showPassword)} className="absolute top-9 right-4 cursor-pointer">
                     {
                        showPassword ? <IoIosEyeOff className="text-2xl"/> :   <IoMdEye className="text-2xl" />
                     }               
                  </span>        


               </div>
            </div>
            <div className="space-y-2">
               <div>
                  <input className="btn btn-neutral w-full px-8 py-3 font-semibold rounded-md text-gray-50" type="submit" value="Register" />
               </div>
               <p className="px-6 text-sm text-center text-gray-600">Do not have an account yet?
               <Link to="/register" rel="noopener noreferrer" href="#" className="text-blue-600 hover:underline font-bold"> Register</Link>.
               </p>
            </div>
         </form>
      </div>
   );
};

export default Login;