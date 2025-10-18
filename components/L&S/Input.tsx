"use client";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
}
export const Input: React.FC<IInputProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <div className="max-w-[309px]">
      <div className="flex flex-wrap gap-x-4">
        <label
          htmlFor={label}
          className="w-24 sm:32 font-semibold text-sm sm:text-base"
        >
          {label} :
        </label>
        <input
          {...props}
          type="text"
          id={label}
          className="rounded-sm px-2 text-black"
        />
      </div>
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};
