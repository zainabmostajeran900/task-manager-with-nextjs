import { z } from "zod";

export const taskFormSchema = z.object({
    priority : z.string().refine(val=> val!= "" , "priority cannot empty"),
    completed : z.string().optional(),
    title : z.string().min(4, "value should be 4 char or more"),
    description : z.string().min(8,"value should be 8 char or more")
})

export type ITaskForm = z.infer<typeof taskFormSchema>