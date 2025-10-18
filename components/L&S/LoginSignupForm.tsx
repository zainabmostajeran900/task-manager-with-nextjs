"use client";
import { Input } from "./Input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSignupFormSchema } from "@/validations/L&S.validation";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { IError } from "@/apis/server-side-apis/auth_service";

export const LoginSignupForm: React.FC<{
  requestFn: (data: ILoginSignup) => Promise<undefined | IError>;
}> = ({ requestFn }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<ILoginSignup>({
    resolver: zodResolver(LoginSignupFormSchema),
    mode: "all",
  });
  const submitForm = async (data: ILoginSignup) => {
    const err = await requestFn(data);
    if (err) {
      return toast.error(err.message);
    }
    pathname === "/login"
      ? toast.success("logged in")
      : toast.success("user created");

    push("/tasks");
    // try {
    //   await requestFn(data)
    // } catch (error ) {
    //   console.log(error)
    // }
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="mt-10 grid gap-y-6 mx-auto"
    >
      <Controller
        control={control}
        name="userName"
        render={({ field, fieldState }) => (
          <Input
            label="UserName"
            error={fieldState.error?.message}
            {...field}
          />
        )}
      ></Controller>
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <Input
            label="Password"
            error={fieldState.error?.message}
            {...field}
          />
        )}
      ></Controller>

      <button
        disabled={!isDirty || !isValid}
        type="submit"
        className="bg-slate-400 textbase font font-semibold px-2 py-1 rounded-sm mt-5 hover:bg-slate-500 disabled:bg-gray-600"
      >
        {pathname === "/login" ? "Login" : "Signup"}
      </button>
    </form>
  );
};
