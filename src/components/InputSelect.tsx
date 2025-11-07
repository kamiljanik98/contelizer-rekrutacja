import { FC } from 'react';

interface Option {
  label: string;
  value: string;
}

interface InputSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
}

const InputSelect: FC<InputSelectProps> = ({
  label,
  options,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <span className="text-sm text-gray-400 font-medium">{label}</span>
      )}
      <select
        {...props}
        className={`bg-gray-900 border border-gray-700 rounded-xl px-3 py-2 text-gray-100 shadow-sm outline-none transition focus:border-blue-500 ${className}`}
      >
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="bg-gray-900 text-gray-100"
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
