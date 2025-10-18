import { CancelButton } from "./CancelButton";
import { GiNotebook } from "react-icons/gi";
import { Input } from "../L&S/Input";
import { RadioInput } from "./RadioInput";
import {
  addNewTaskService,
  editTaskService,
} from "@/apis/server-side-apis/tasks_service";
import { Controller, useForm } from "react-hook-form";
import { ITaskForm, taskFormSchema } from "@/validations/taskForm.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { ToggleInput } from "./ToggleInput";

export const TaskForm: React.FC<{
  showHandle: () => void;
  isEdit: boolean;
  task?: ITask;
}> = ({ showHandle, isEdit, task }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<ITaskForm>({
    resolver: zodResolver(taskFormSchema),
    mode: "all",
  });
  const submitForm: (data: ITaskForm) => void = async(data) => {
    if (isEdit && task) {
      await editTaskService(data, task.id);
      toast.success("Task edited");
    } else {
      await addNewTaskService(data);
      toast.success("Task created");
    }
    showHandle();
  };
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
            onSubmit={handleSubmit(submitForm)}
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl"
          >
            <div className="bg-[#fdcfd0] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:flex-col  sm:gap-y-5 ">
                <div className="flex gap-x-1  items-center justify-center rounded-md bg-[#fd9fa1] px-2">
                  <div className=" flex flex-shrink-0 w-14 h-14 items-center justify-center ">
                    <GiNotebook className="size-10 " />
                  </div>
                  <h3
                    className="text-base text-center sm:text-lg font-semibold text-slate-900"
                    id="modal-title"
                  >
                    add new Task
                  </h3>
                </div>
                <div className="flex flex-col gap-y-3 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <Controller
                    control={control}
                    name="priority"
                    defaultValue={isEdit ? task?.priority : undefined}
                    render={({ field, fieldState }) => {
                      return (
                        <RadioInput
                          {...field}
                          label="Level of Priority"
                          error={fieldState.error?.message}
                          select={[
                            "high_priority",
                            "medium_priority",
                            "low_priority",
                          ]}
                        />
                      );
                    }}
                  ></Controller>
                  {isEdit && (
                      <Controller
                        control={control}
                        name="completed"
                        defaultValue={
                          isEdit && task?.completed === true
                            ? "yes"
                            : isEdit && task?.completed === false
                            ? "no"
                            : undefined
                        }
                        render={({ field, fieldState }) => {
                          return (
                            <ToggleInput
                              {...field}
                              label="Is Completed"
                              error={fieldState.error?.message}
                            />
                          );
                        }}
                      ></Controller>
                  )}
                  <Controller
                    control={control}
                    name="title"
                    defaultValue={isEdit ? task?.title : undefined}
                    render={({ field, fieldState }) => {
                      return (
                        <Input
                          {...field}
                          label="Title"
                          error={fieldState.error?.message}
                        />
                      );
                    }}
                  ></Controller>
                  <Controller
                    control={control}
                    name="description"
                    defaultValue={isEdit ? task?.description : undefined}
                    render={({ field, fieldState }) => {
                      return (
                        <Input
                          {...field}
                          label="Description"
                          error={fieldState.error?.message}
                        />
                      );
                    }}
                  ></Controller>
                </div>
              </div>
            </div>
            <div className="bg-[#fdcfd0] border-t-2 border-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                disabled={!isDirty || !isValid}
                type="submit"
                className="disabled:bg-red-300 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                {isEdit ? "Edit" : "Add Task"}
              </button>
              <CancelButton showHandle={showHandle} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
