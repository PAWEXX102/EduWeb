import { ErrorOption } from "react-hook-form";

interface inputFormProps {
  set: (value: string) => void;
  value: string;
  placeholder: string;
  type: string;
  name: string;
  register: any;
  error: undefined | ErrorOption;
  className?: string;
}

const InputForm = ({
  set,
  value,
  placeholder,
  type,
  name,
  error,
  className,
  register, 
}: inputFormProps) => {
  return (
    <>
      <input
        {...register(name)}
        type={type}
        name={name}
        onChange={(e) => set(e.target.value)}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        className={` w-full font-bold outline-none rounded-2xl text-lg px-2  border-2 focus:border-sky-300/50 bg-sky-300/5 ${className} ${
          error ? "border-red-500" : "border-[#2c4652]"
        }`}
      />
      {error && (
        <span className="py-1 font-bold text-red-500 ">{error.message}</span>
      )}
    </>
  );
};

export default InputForm;