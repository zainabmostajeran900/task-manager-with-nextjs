import { DeleteTaskButton } from "@/components/tasks/DeleteTaskButton";
import { EditTaskButton } from "@/components/tasks/EditTaskButton";

export const ProgressOrCompleted: React.FC<{
  tasks: ITask[] | undefined;
  isCompleted: boolean;
}> = ({ isCompleted, tasks }) => {
  return (
    <div
      className={`${
        tasks === undefined ? "hidden" : "grid"
      } gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
    >
      {tasks?.map((item) => (
        <div key={item.id} className="bg-[#fd9fa1] rounded-md p-2 w-full">
          <h2 className="font-semibold">{item.title}</h2>
          <h2 className="text-black/70">{item.description}</h2>
          <div className="flex justify-between">
            <p
              className={`${
                item.priority === "high_priority"
                  ? "bg-red-400"
                  : item.priority === "medium_priority"
                  ? "bg-[#fcc387]"
                  : "bg-gray-400"
              }  text-sm border w-fit rounded-sm px-2 text-white mt-2`}
            >
              {item.priority}
            </p>
            <p
              className={`${
                isCompleted === true ? "bg-green-300" : "bg-yellow-200"
              }  text-sm border w-fit rounded-sm px-2  mt-2`}
            >
              {isCompleted === true ? "completed" : "in progress"}
            </p>
          </div>
          <div className="flex justify-center items-center mt-2">
            <EditTaskButton task={item} />
            <DeleteTaskButton id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
};
