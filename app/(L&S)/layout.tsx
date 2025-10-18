import { ReactNode } from "react";

const LoginSignupLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="bg-slate-600 min-h-[calc(100vh-128px)] text-white pt-1 px-1">{children}</div>;
};
export default LoginSignupLayout;