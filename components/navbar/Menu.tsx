"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LoginSingupButton } from "./L&SButton";
import Link from "next/link";

export const Menu: React.FC<{
  userToken: string | undefined;
  logoutHandle: () => Promise<void>;
}> = ({ userToken, logoutHandle }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="relative z-10">
      <button
        onClick={() => setShow((prev) => !prev)}
        className="text-white align-middle"
      >
        <GiHamburgerMenu className="size-7" />
      </button>

      {show && (
        <div className="bg-slate-900 flex flex-col w-80 absolute top-10 -right-2 p-2 gap-y-2 text-sm items-center rounded-md">
          <div className={`flex gap-x-2 ${userToken ? "flex" : "hidden"}`}>
            <Link href={"/tasks/in-progress"}>
              <button
                onClick={() => setShow((prev) => !prev)}
                className="text-white font-semibold border rounded-md py-1 px-2 bg-[#f7be82] hover:bg-[#ca945e]"
              >
                In Progress
              </button>
            </Link>
            <Link href={"/tasks"}>
              <button
                onClick={() => setShow((prev) => !prev)}
                className="text-white font-semibold border rounded-md py-1 px-2 bg-slate-600 hover:bg-slate-700"
              >
                Dashboard
              </button>
            </Link>
            <Link href={"/tasks/completed"}>
              <button
                onClick={() => setShow((prev) => !prev)}
                className="text-white font-semibold border rounded-md py-1 px-2 bg-green-400 hover:bg-green-600"
              >
                Completed
              </button>
            </Link>
          </div>
          <LoginSingupButton
          logoutHandle={logoutHandle}
            userToken={userToken}
            showHide={() => setShow((prev) => !prev)}
          />
        </div>
      )}
    </div>
  );
};
