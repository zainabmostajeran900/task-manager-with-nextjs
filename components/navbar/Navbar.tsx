"use server";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { Menu } from "./Menu";
import { LoginSingupButton } from "./L&SButton";
import { getToken, removeToken } from "@/utils/session-managment";

export const Navbar: React.FC = async () => {
  const userToken = await getToken();
  async function logoutHandle() {
    "use server";
    await removeToken();
  }
  return (
    <div className="bg-slate-900 flex justify-between items-center py-2 px-3 md:px-6">
      <Link href={"/"} className="flex items-center gap-x-2">
        <IoHomeSharp className="fill-white size-7 md:size-10" />
        <h2 className="text-2xl text-white font-semibold">
          TaskManager
        </h2>
      </Link>
      <div className={` ${userToken ? "md:flex gap-x-4 hidden" : "hidden"}`}>
        <Link href={"/tasks/in-progress" }>
          <button className="text-white font-semibold border rounded-md py-1 px-2 bg-[#f7be82] hover:bg-[#ca945e]">
            In Progress
          </button>
        </Link>
        <Link href={"/tasks"}>
          <button
            className="text-white font-semibold border rounded-md py-1 px-2 bg-slate-600 hover:bg-slate-700"
          >
            Dashboard
          </button>
        </Link>
        <Link href={"/tasks/completed"}>
          <button className="text-white font-semibold border rounded-md py-1 px-2 bg-green-400 hover:bg-green-600">
            Completed
          </button>
        </Link>
      </div>
      <div className={`${userToken ? "hidden md:block" : "block"}`}>
        <LoginSingupButton logoutHandle={logoutHandle} userToken={userToken} />
      </div>
      <div className={`${userToken ? "block md:hidden" : "hidden"}`}>
        <Menu logoutHandle={logoutHandle} userToken={userToken} />
      </div>
    </div>
  );
};
