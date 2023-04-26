interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    type,
    disabled,
    onChange
}) => {
  return (
    <div>
        <input
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            type={type}

            className="
                w-full
                p-4
                text-lg
                rounded-md
                outline-none
                border-2
                border-neutral-800
                bg-black
                text-white
                focus:border-blue-800
                focus:border-2
                transition
                disabled:bg-neutral-900
                disabled:opacity-70
                disabled:cursor-not-allowed
            "
        />
    </div>
  );
};

export default Input;