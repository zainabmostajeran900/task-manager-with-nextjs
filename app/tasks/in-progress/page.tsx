"use server";
import { fetchPartTaskListService } from "@/apis/server-side-apis/tasks_service";
import { ProgressOrCompleted } from "@/containers/ProgressOrCompleted";

const InProgress: React.FC = async () => {
  const tasks = await fetchPartTaskListService("progress");
  return (
    <div className="bg-[#f7e2cb] min-h-[calc(100vh-128px)] p-3">
      <h2 className="text-2xl font-semibold mb-2">In Progress</h2>
      <ProgressOrCompleted tasks={tasks?.items} isCompleted={false}/>
    </div>
  );
};
export default InProgress;
