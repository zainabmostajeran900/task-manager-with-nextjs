"use client"
import { useState } from "react";
import { RemoveTask } from "./RemoveTask";

export const DeleteTaskButton : React.FC<{id : string}> = ({id})=>{
     const [show,setShow] = useState<boolean>(false);
    return <>
    <button
      onClick={()=>setShow(prev=>!prev)}
      className="gap-x-2 text-sm rounded-r-md bg-rose-100 font-semibold px-2 py-1 w-1/2 text-center hover:bg-rose-600">
        Delete
      </button>
      {show && <RemoveTask id={id} showHandle={()=>setShow(prev=>!prev)}/>}
    </>
}