"use client";
import Link from "next/link";

export const LoginSingupButton: React.FC<{
  showHide?: () => void;
  userToken: string | undefined;
  logoutHandle: () => Promise<void>;
}> = ({ showHide, userToken, logoutHandle }) => {
  const logout = () => {
    logoutHandle();
    if (showHide) showHide();
  };
  return (
    <>
      <div className={` gap-x-4 sm:mr-6 ${!userToken ? "flex" : "hidden"}`}>
        <Link href={"/login"}>
          <button
            onClick={showHide}
            className="border rounded-md text-sm text-white bg-gray-500 font-semibold py-1 px-2 hover:bg-gray-700"
          >
            login
          </button>
        </Link>
        <Link href={"/signup"}>
          <button
            onClick={showHide}
            className="border rounded-md text-sm text-white bg-gray-500 font-semibold py-1 px-2 hover:bg-gray-700"
          >
            signUp
          </button>
        </Link>
      </div>
      <Link href={"/"}>
        <button
          onClick={logout}
          className={`${
            userToken ? "block" : "hidden"
          } border rounded-md text-sm text-white bg-gray-500 font-semibold py-1 px-2 hover:bg-gray-700`}
        >
          logout
        </button>
      </Link>
    </>
  );
};
