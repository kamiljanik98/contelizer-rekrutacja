import { FC } from 'react';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputText: FC<InputTextProps> = ({
  label,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <>
      {label && (
        <span className="text-sm text-gray-400 font-medium">{label}</span>
      )}
      <input
        {...props}
        type="text"
        onChange={onChange}
        className={`bg-transparent w-full rounded-xl border border-gray-700 px-4 py-2 text-gray-100 placeholder-gray-500 shadow-sm outline-none transition focus:border-blue-500 ${className}`}
      />
    </>
  );
};

export default InputText;
