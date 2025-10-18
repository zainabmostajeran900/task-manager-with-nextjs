"use server";
import { AxiosError } from "axios";
import { httpReq } from "../client";
import { urls } from "../urls";
import { revalidatePath } from "next/cache";
import { ITaskForm } from "@/validations/taskForm.validation";
import { getToken } from "@/utils/session-managment";

type IAddNewTask = (data: ITaskForm) => Promise<void>;
export const addNewTaskService: IAddNewTask = async (data) => {
  try {
    const instance = await httpReq();
    // for get email and save in tasks
    const token = await getToken();
    const params = { filter: `token= '${token}'` };
    const emailToken = await instance.get<{ items: { email: string }[] }>(
      urls.emailToken.get,
      { params }
    );
    const response = await instance.post(urls.task.addTask, {
      ...data,
      email: emailToken.data.items[0].email,
    });
    revalidatePath("/tasks");
  } catch (error) {
    console.log((error as AxiosError).response?.data);
  }
};

interface ITaskResDto extends IResDto {
  items: ITask[];
}
type FetchTaskListService = () => Promise<ITaskResDto | undefined>;
export const fetchTaskListService: FetchTaskListService = async () => {
  try {
    const token = await getToken();
    const instance = await httpReq();
    const params = { filter: `token= '${token}'` };
    const emailToken = await instance.get<{ items: { email: string }[] }>(
      urls.emailToken.get,
      { params }
    );
    const taskParams = {
      filter: `email= '${emailToken.data.items[0].email}'`,
    };
    const response = await instance.get<ITaskResDto>(urls.task.list,{params:taskParams});
    return response.data;
  } catch (error) {
    console.log((error as AxiosError).response?.data);
  }
};

type FetchPartTaskListService = (
  part: string
) => Promise<ITaskResDto | undefined>;
export const fetchPartTaskListService: FetchPartTaskListService = async (
  part
) => {
  try {
    const token = await getToken();
    const instance = await httpReq();
    const params = { filter: `token= '${token}'` };
    const emailToken = await instance.get<{ items: { email: string }[] }>(
      urls.emailToken.get,
      { params }
    );
    const taskParams = {
      filter: `completed= ${part === "completed" ? true : false} && email= '${emailToken.data.items[0].email}'`,
    };
    const response = await instance.get<ITaskResDto>(urls.task.list, {
      params: taskParams,
    });
    return response.data;
  } catch (error) {
    console.log((error as AxiosError).response?.data);
  }
};

type EditTaskService = (data: ITaskForm, id: string) => Promise<void>;
export const editTaskService: EditTaskService = async (data, id) => {
  try {
    const instance = await httpReq();

    const response = await instance.patch(urls.task.editTask(id), {
      ...data,
      completed: data.completed === "yes" ? true : false,
    });
    revalidatePath("/tasks");
  } catch (error) {
    console.log((error as AxiosError).response?.data);
  }
};
type RemoveTaskService = (id: string) => Promise<void>;
export const removeTaskService: RemoveTaskService = async (id) => {
  try {
    const instance = await httpReq();
    const response = await instance.delete(urls.task.deleteTask(id));
    revalidatePath("/tasks");
  } catch (error) {
    console.log((error as AxiosError).response?.data);
  }
};
