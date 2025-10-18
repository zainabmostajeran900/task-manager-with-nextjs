"use server";
import { fetchPartTaskListService } from "@/apis/server-side-apis/tasks_service";
import { ProgressOrCompleted } from "@/containers/ProgressOrCompleted";

const Completed: React.FC = async () => {
  const tasks = await fetchPartTaskListService("completed");
  return (
    <div className="bg-[#ccf5bc] min-h-[calc(100vh-128px)] p-3">
      <h2 className="text-2xl font-semibold mb-2">Completed</h2>
      <ProgressOrCompleted tasks={tasks?.items} isCompleted={true}/>
    </div>
  );
};
export default Completed;
