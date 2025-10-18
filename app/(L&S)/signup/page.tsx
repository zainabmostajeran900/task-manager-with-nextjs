import { signUp } from "@/apis/server-side-apis/auth_service";
import { LoginSignupForm } from "@/components/L&S/LoginSignupForm";

const SignUp: React.FC = () => {
  return (
    <div className="grid w-full max-w-screen-sm mx-auto px-2 sm:px-5 mt-10 bg-slate-800 py-10 rounded-md ">
      <h2 className="text-xl sm:text-2xl font-semibold text-center">Signup and Create Account</h2>
      <LoginSignupForm requestFn={signUp}/>
    </div>
  );
};
export default SignUp;
