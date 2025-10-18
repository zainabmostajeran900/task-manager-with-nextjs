import { z } from "zod";

export const LoginSignupFormSchema = z.object({
  userName: z.string().email("example : example@gmail.com"),
  password: z
    .string()
    .refine(
      (val) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          val
        ),
      "min value should be 8 char and icludes lowercase,uppercase,number and sign"
    ),
});
