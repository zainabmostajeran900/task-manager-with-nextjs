import { MdDelete } from "react-icons/md";
import { CancelButton } from "./CancelButton";
import { removeTaskService } from "@/apis/server-side-apis/tasks_service";
import { toast } from "react-toastify";

export const RemoveTask: React.FC<{ showHandle: () => void; id: string }> = ({
  showHandle,
  id,
}) => {
    const submitHandle  = async()=>{
      await removeTaskService(id);
      toast.success("Task deleted")
      showHandle();
    }
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <form
            onSubmit={submitHandle}
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl"
          >
            <div className="bg-[#fdcfd0] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:flex-col  sm:gap-y-5 ">
                <div className="flex gap-x-1  items-center justify-center rounded-md bg-[#fd9fa1] px-2">
                  <div className=" flex flex-shrink-0 w-14 h-14 items-center justify-center ">
                    <MdDelete  className="size-10 " />
                  </div>
                  <h3
                    className="text-base text-center sm:text-lg font-semibold text-slate-900"
                    id="modal-title"
                  >
                    Remove Task
                  </h3>
                </div>
                <div className="flex flex-col gap-y-3 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                are you sure to remove this task ?
                </div>
              </div>
            </div>
            <div className="bg-[#fdcfd0] border-t-2 border-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Delete 
              </button>
              <CancelButton showHandle={showHandle} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
