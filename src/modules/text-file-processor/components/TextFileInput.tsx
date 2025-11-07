import React from "react";
import { twMerge } from "tailwind-merge";

type TextFileInputProps = {
  onChange: (file: File | null) => void;
  className?: string;
};

const TextFileInput = ({ onChange, className }: TextFileInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

  return (
    <input
      type="file"
      onChange={handleChange}
      className={twMerge(
        `max-w-[270px] 
        mt-4 
        p-4 
        rounded-2xl 
        border 
        shadow-lg
        text-gray-700 
        cursor-pointer 
        appearance-none
        dark:bg-gray-900
        dark:border-gray-800
        file:mr-4
        file:rounded-lg 
        file:border-0
        file:bg-blue-600 
        file:px-4 
        file:py-2 
        file:text-white 
        file:hover:bg-blue-700`,
        className
      )}
    />
  );
};

export default TextFileInput;
