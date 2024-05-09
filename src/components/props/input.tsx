interface InputProps {
  placeholder: string;
  value?: string;
  type?: string;
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  placeholder,
  value,
  type,
  disabled,
  id,
  required,
  name,
  onChange,
  onBlur,
}: InputProps) => {
  return (
    <div className="relative z-0">
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        type={type}
        onBlur={onBlur}
        name={name}
        id={id}
        required={required}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        htmlFor="floating_standard"
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
