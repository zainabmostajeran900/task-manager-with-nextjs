"use server"
import { login } from "@/apis/server-side-apis/auth_service";
import { LoginSignupForm } from "@/components/L&S/LoginSignupForm";

const Login : React.FC = ()=>{
    return (
        <div className="grid w-full max-w-screen-sm mx-auto px-2 sm:px-5 mt-10 bg-slate-800 py-10 rounded-md ">
          <h2 className="text-xl sm:text-2xl font-semibold text-center">login to your account</h2>
          <LoginSignupForm requestFn={login}/>
        </div>
      );
}
export default Login