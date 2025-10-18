import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface IToggleInputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "onChange"
  > {
  label: string;
  error?: string;
  onChange: (e: string) => void;
}

export const ToggleInput: React.FC<IToggleInputProps> = ({
  label,
  error,
  value,
  onChange,
  ...props
}) => {
  const changeHandle = (e: boolean) => {
    console.log(e);
    onChange && onChange(e ? "yes" : "no");
  };
  return (
    <>
      <label className="inline-flex items-center  cursor-pointer w-fit">
        <span className="ms-3 text-sm sm:text-base font-medium  w-36 text-start">
          {label} :
        </span>
        <input
          {...props}
          onChange={(e) => changeHandle(e.target.checked)}
          type="checkbox"
          checked={value === "yes" ? true : false}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      {error && <p className="text-red-500 font-semibold">{error}</p>}
    </>
  );
};
