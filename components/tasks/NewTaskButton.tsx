"use client"
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TaskForm } from "./TaskForm";

export const NewTaskButton : React.FC = ()=>{
    const [show,setShow] = useState<boolean>(false);
    return <>
     <button
      onClick={()=>setShow(prev=>!prev)}
      className="flex items-center gap-x-2 border bg-[#fd9fa1] font-semibold px-2 rounded-md hover:bg-gray-400">
        <FaPlus />
        <span>add new task</span>
      </button>
      {show && <TaskForm isEdit={false} showHandle={()=>setShow(false)}/>}
    </>
}