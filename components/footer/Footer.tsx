import { Input } from "../L&S/Input";

export const Footer: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white px-4 md:px-6 py-3">
      <div className="flex flex-wrap md:px-6 items-center justify-between sm:w-1/2 md:w-full gap-x-2 text-appWhite">
        <div>
          <h2 className="font-semibold text-appWhite text-center">
            Create and Manage Todo List (Task List)
          </h2>
        </div>
        <div className="border-l pl-2 text-sm sm:text-base">
          <h4>Contact us:</h4>
          <Input label="Email" name="email" />
        </div>
        <div className="border-l pl-2 text-sm sm:text-base">
          <h4>address :</h4>
          <h4>123 street name,city,</h4>
        </div>
      </div>
    </div>
  );
};
